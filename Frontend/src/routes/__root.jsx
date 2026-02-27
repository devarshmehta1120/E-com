import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/common/Navbar'
import Footer from '../components/common/Footer'
  import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
        <>
        <div className="min-h-screen flex flex-col">
   < StarsBackground className="fixed inset-0 -z-10 pointer-events-none" />
        <Navbar/>
      <Outlet/>
      <Footer/>
        </div>
        </>
      
  )
}
