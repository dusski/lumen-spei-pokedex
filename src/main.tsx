import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PokemonPage from './pages/PokemonPage';
import { pokemonIdLoader } from './pages/PokemonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'pokemon/:pokemonId',
        element: <PokemonPage />,
        loader: pokemonIdLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
