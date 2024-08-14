"use client"
import Hero from "@/components/helpers/Hero";
import { Navbar } from "@/components/helpers/Navbar";
import Image from "next/image";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
  
    return () => {
      <Navbar/>
    }
  }, [])
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-rose-100 to-teal-100 '>
      <Navbar/>
      <Hero/>
    </div>
  );
}
