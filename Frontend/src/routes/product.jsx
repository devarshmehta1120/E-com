import { createFileRoute } from '@tanstack/react-router'
import { Product } from '../components/pages/product/product'

export const Route = createFileRoute('/product')({
  component: Product,
})

