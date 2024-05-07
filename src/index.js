// This is needed because React.createElement is called internally
import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// const header = <h1>This is my react app</h1>;

// This is the simplest way to render something
// ReactDOM.render(header, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);