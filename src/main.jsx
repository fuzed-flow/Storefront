import React from 'react';
import {hydrateRoot,createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
const element=document.getElementById('root');
if(element.hasChildNodes())hydrateRoot(element,<React.StrictMode><App/></React.StrictMode>);
else createRoot(element).render(<React.StrictMode><App/></React.StrictMode>);
