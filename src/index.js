import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Signup from './features/signup';
// import Login from './features/Login';
// import User from './features/User';
// import FileUpload from "./features/board"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Signup />,
//     children: [
//       {
//         path: '/Login',
//         element: <Login/>,
//       },
//       {
//         path: '/board', 
//         element: < FileUpload/>,
//       },
//       {
//         path: '/myfiles', 
//         element: < User/>,
//       },
//     ],
     
//   },
// ]);
root.render(
  <Provider store={store}>
   {/* <RouterProvider router={router} /> */}
   <App />
  </Provider>
);


reportWebVitals();
