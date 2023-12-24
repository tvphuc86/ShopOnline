import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import DashBoard from './page/adminPage/DashBoard';
import ErrorPage from './ErrorPage';
import LayoutAdmin from './page/adminPage/LayoutAdmin';
import Size from './page/adminPage/Size';
import Category from './page/adminPage/Category';
import Report from './page/adminPage/Report';
import Brand from './page/adminPage/Brand';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutAdmin />} errorElement={<ErrorPage />}>
      <Route
        path="/admin/dashboard"
        element={<DashBoard />}
        errorElement={<ErrorPage />}></Route>
           <Route
          path="/admin/business/size"
          element={<Size />}
          errorElement={<ErrorPage />}></Route>
          <Route
          path="/admin/business/category"
          element={<Category />}
          errorElement={<ErrorPage />}></Route>
          <Route
          path="/admin/business/report"
          element={<Report />}
          errorElement={<ErrorPage />}></Route>
          <Route
          path="/admin/business/brand"
          element={<Brand />}
          errorElement={<ErrorPage />}></Route>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
