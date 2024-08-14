import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaLongArrowAltRight } from "react-icons/fa";

function Hero() {
  return (
    <div className="text-center mt-2 p-3 ">
    <h1 className="text-6xl font-bold tracking-tight text-gray-900 mt-6 p-3 ">
    AI expert on your codebase
    </h1>
    <div>
        <p className=' text-2xl mt-4'>
        Build custom AI dev tools with the API that understands your codebase.
    </p>
    </div>
    <div className=' mt-7'>
        <Link href={"/dashboard"}>
        <Button className=' hover:bg-lime-300 rounded-lg bg-green-400'>Get Started<FaLongArrowAltRight className=' m-1' /></Button>
        </Link>
    </div>
    </div>
  )
}

export default Hero