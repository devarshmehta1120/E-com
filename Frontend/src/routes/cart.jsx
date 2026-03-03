import { createFileRoute } from '@tanstack/react-router'
import Cart from '../components/pages/product/cart'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

