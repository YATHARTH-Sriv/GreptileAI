
"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { FaLongArrowAltRight } from "react-icons/fa"



export function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
        <div>
            <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem >
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <p className=" text-2xl">Greptile</p>
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Docs
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <UserButton afterSwitchSessionUrl="/" /> 
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>
        <div >
        <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem >
                <Link href="/sign-in" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Login
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/sign-up" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {/* <Button className=" bg-white">Get Started</Button> */}
                    <Button className=' hover:bg-green-400 rounded-lg bg-white'>Get Started<FaLongArrowAltRight className=' m-1' /></Button>
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>
    </div>
  )
}