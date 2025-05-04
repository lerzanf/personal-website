import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from "./context/AppContext.jsx";

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
