import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AboutPage from './Pages/AboutPage/AboutPage.jsx';
import MoreTrips from './Pages/MoreTrips/MoreTrips.jsx';
import PopularDestinations from './Pages/PopularDestinations/PopularDestinations.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/moreTrips",
    element: <MoreTrips/>,
  },
  {
    path: "/AboutPage",
    element: <AboutPage/>,
  },
  {
    path: "/PopularDestinations",
    element: <PopularDestinations/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
