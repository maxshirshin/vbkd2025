import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

export function initVBKDGallery(rootElementId: string = 'root') {
  const rootElement = document.getElementById(rootElementId);
  if (!rootElement) {
    console.error(`Element with id "${rootElementId}" not found`);
    return;
  }
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
