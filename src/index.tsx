import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </ BrowserRouter>
);

