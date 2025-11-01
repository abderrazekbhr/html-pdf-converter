export interface ContextType{
    themeDark:boolean,
    toggleTheme: () => void,
    autoSave: boolean,
    toggleAutoSave: () => void,
    htmlContent: string,
    changeHtmlContent: (content: string) => void
} 