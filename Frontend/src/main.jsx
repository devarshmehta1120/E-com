import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

import { routeTree } from './routeTree.gen'
import { CartProvider } from 'react-use-cart'
const queryClient = new QueryClient()
const router = createRouter({ routeTree })
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
  <CartProvider>  
    <RouterProvider router={router} />
  </CartProvider>    
    </QueryClientProvider>
  </StrictMode>,
)
