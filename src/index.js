import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { stores } from './stores';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import { SnackbarProvider } from 'notistack';
import { Notification } from './shares/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={stores}>
    <SnackbarProvider 
    anchorOrigin={{
      vertical : 'top',
      horizontal : 'right'
    }} 
    maxSnack={3}
    autoHideDuration={1000}
    >
      <Notification />
      <RouterProvider router={routers} />
    </SnackbarProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
