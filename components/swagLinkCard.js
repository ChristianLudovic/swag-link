"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiLink, FiKey, FiZap } from 'react-icons/fi'
import localFont from 'next/font/local'
import SwagLoader from './swagLoader'


const gtSuperFont = localFont({
  src: '../public/rebond-grotesque/ESRebondGrotesqueTRIAL-Bold-BF66189040400df.otf',
  fontWeight: '700',
  fontStyle: 'normal',
  fontDisplay: 'swap',

})

export default function SwagLinkCard() {
  const [duration, setDuration] = useState(24)
  const [maxUsers, setMaxUsers] = useState(10)
  const [isPasswordProtected, setIsPasswordProtected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 7000)
  }

  return (
    <Card className="w-full max-w-[320px] bg-white text-black min-h-[546px]">
      <CardHeader className="space-y-1 border-b border-gray-200">
        <CardTitle className={` ${gtSuperFont.className} text-3xl font-bold`}>Swag Your Link</CardTitle>
        <CardDescription className="text-gray-600">Add some swagger to your shared link</CardDescription>
      </CardHeader>
      
        <CardContent className = "grid gap-6 pt-6">
          {isLoading?  (
              <SwagLoader />
            ) : (
            <>
            <div className="relative">
              <Input 
                id="link" 
                placeholder="Enter your link here" 
                className="pl-10 bg-white text-black placeholder-gray-400 placeholder:text-xs h-11"
              />
              <FiLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm text-black">Swag Duration (hours)</Label>
              <div className="relative">
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))} h-11
                  min={1}
                  max={72}
                  className="bg-white text-black placeholder-gray-400  h-11 text-xs"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">hrs</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-sm text-black flex items-center">
                <FiKey className="mr-2" />
                Swag Protection
              </Label>
              <Switch 
                id="password" 
                checked={isPasswordProtected}
                onCheckedChange={setIsPasswordProtected}
              />
            </div>
            <AnimatePresence>
              {isPasswordProtected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Input 
                    type="password" 
                    placeholder="Enter swag password" 
                    className="bg-white text-black placeholder-gray-400  h-11 placeholder:text-xs"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="space-y-2">
              <Label htmlFor="maxUsers" className="text-sm text-black">Swag Squad Size</Label>
              <div className="relative">
                <Input
                  id="maxUsers"
                  type="number"
                  value={maxUsers}
                  onChange={(e) => setMaxUsers(Number(e.target.value))}
                  min={1}
                  max={100}
                  className="bg-white text-black placeholder-gray-400  h-11 "
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs">users</span>
              </div>
            </div>
            </>
            ) }
        </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-[#161616] text-white hover:bg-black transition-colors duration-300 mt-7 mb-3  h-11" onClick={handleClick}>
          <FiZap className="mr-2" />
          Generate Swag Link
        </Button>
      </CardFooter>
    </Card>
  )
}