import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  Outlet,
  RouterProvider,
  Link,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router'
import Landing from './features/Landing/Landing'
import Projects from './features/Projects/Projects'

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
     
      <Outlet />
    </>
  )
})

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Landing,
})

const aboutRoute = rootRoute.createRoute({
  path: '/about',
  component: Projects,
})

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute])

const router = createReactRouter({ routeConfig })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
