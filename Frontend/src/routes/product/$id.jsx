import { createFileRoute } from '@tanstack/react-router'
import ProductDetails from '../../components/pages/product/productdetails'
// import { ProductDetails } from '../../components/pages/product/productdetails'

export const Route = createFileRoute('/product/$id')({
  component: ProductDetails,
})


