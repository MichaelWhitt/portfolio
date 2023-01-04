import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './features/Pages/Landing/Landing'
import Projects from './features/Pages/Projects/Projects'
import About from './features/Pages/Experience/Experience'
import Contact from './features/Pages/Contact/Contact'
import Stacker from './features/Pages/Stacker';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Stacker />,
    
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
)
