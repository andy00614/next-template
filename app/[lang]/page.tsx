'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import getNavLinks from "./links";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { getDictionary } from './dictionaries'
import { useEffect } from "react";



export default function IndexPage(props) {
  const theme = useTheme()

  const handleClick = (e: boolean) => {
    theme.setTheme(e ? 'dark' : 'light')
  }

  useEffect(() => {
    (async function () {
      console.log('lang', props)
      // const dict = await getDictionary(lang) // en
      // console.log('dict', dict)
    }())
  }, [])

  return <div className="container relative mx-auto min-h-screen w-full px-0">
    <div>
      background
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Button>Button</Button>

      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" onCheckedChange={handleClick} />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
        <div className="dark:text-white">abc</div>
      </div>

      <div>
        <p>Text</p>
        <p></p>
      </div>
    </div>
  </div>
}
