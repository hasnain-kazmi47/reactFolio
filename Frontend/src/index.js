import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import BlogSingle from "./BlogSingle"
import Home from "./Home"
import {Provider} from "react-redux"
import store from "./Redux/store"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}> 
  <Route index element={<Home/>}/>   
  <Route path="/blog-single" element={<BlogSingle/>}/> 
  </Route>
  )
  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
