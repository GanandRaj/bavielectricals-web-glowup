import React from "react";
import { createRoot } from 'react-dom/client'
import '@fontsource/comic-neue/400.css';
import '@fontsource/comic-neue/700.css';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
