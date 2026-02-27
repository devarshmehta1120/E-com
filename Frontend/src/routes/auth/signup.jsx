import { createFileRoute } from '@tanstack/react-router'
import Signup from '../../components/pages/Auth/signup'

export const Route = createFileRoute('/auth/signup')({
  component: Signup,
})

