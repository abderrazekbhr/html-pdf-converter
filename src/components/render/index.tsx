import { jsPDF } from "jspdf";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";

export function Render() {
  const [pdfUrl, setPdfUrl] = useState("");
  const { htmlContent } = useContext(AppContext);
  const generatePdf = async () => {
    const doc = new jsPDF();

    await doc.html(htmlContent, {
      callback: (doc) => {
        const pdfBlob = doc.output("blob");
        const url = URL.createObjectURL(pdfBlob);
        setPdfUrl(url);
      },
      html2canvas: {
        useCORS: true,
        scale: 2, // Better quality
      },
      margin: [10, 10, 10, 10],
      autoPaging: "text",
    });
  };

  useEffect(() => {
    generatePdf();

    // Cleanup
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [htmlContent]);

  return (
    <iframe
      src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH&zoom=100`}
      width="100%"
      style={{ border: "none" }}
    />
  );
}
