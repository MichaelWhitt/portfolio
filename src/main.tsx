import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Stacker from './features/Pages/Stacker'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Stacker />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
)
