import { createFileRoute } from '@tanstack/react-router'
import Login from '../../components/pages/Auth/login'

export const Route = createFileRoute('/auth/login')({
  component: Login,
})

