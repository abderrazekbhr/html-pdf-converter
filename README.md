# HTML to PDF Converter

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-green.svg)](package.json)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178c6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.18-38bdf8.svg)](https://tailwindcss.com/)

## Overview

A professional-grade HTML to PDF conversion tool built with React and TypeScript. Transform your HTML content into high-quality PDF documents with real-time preview and extensive customization options.

## Key Features

### Interactive Editor
- Real-time HTML editing with syntax highlighting
- Code autocompletion and error detection
- Multiple themes support

### Advanced PDF Generation
- Live preview while editing
- Customizable page settings
- Header and footer support
- Custom fonts and styling

### Professional UI/UX
- Clean, modern interface with Tailwind CSS
- Responsive design for all devices
- Dark/Light mode support
- Intuitive controls

### Developer Experience
- TypeScript for enhanced code quality
- Modular architecture
- Comprehensive documentation
- Extensive test coverage

## Prerequisites

Make sure you have installed:

- Node.js (v16.x or higher)
- npm (v7.x or higher) or yarn (v1.22.x or higher)
- Modern web browser (Chrome, Firefox, Safari, or Edge)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/converter-html-pdf.git
cd converter-html-pdf
```

2. Install dependencies:

```bash
npm install
```

## Quick Start

1. Start the development server:

```bash
npm start
```

2. Open your browser and visit: [http://localhost:3000](http://localhost:3000)

3. Start editing HTML and see the PDF preview in real-time!

## Project Structure

```plaintext
converter-html-pdf/
├── public/                 # Static files
├── src/                    # Source code
│   ├── components/        # React components
│   │   ├── editor/       # HTML editor components
│   │   └── render/       # PDF rendering components
│   ├── context/          # React context providers
│   ├── consts/          # Constants and configurations
│   └── App.tsx           # Main application component
├── package.json          # Project dependencies
└── tsconfig.json         # TypeScript configuration
```

## Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build production bundle
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
