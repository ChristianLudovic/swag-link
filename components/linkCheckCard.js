import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiLink, FiKey, FiZap } from 'react-icons/fi'
import localFont from 'next/font/local'

const gtSuperFont = localFont({
    src: '../public/rebond-grotesque/ESRebondGrotesqueTRIAL-Bold-BF66189040400df.otf',
    fontWeight: '700',
    fontStyle: 'normal',
    fontDisplay: 'swap',
  
  })

export default function LinkCheckCard() {
    return (
        <Card className="w-full max-w-[320px] bg-white text-black ">
      <CardHeader className="space-y-1 border-b border-gray-200">
        <CardTitle className={` ${gtSuperFont.className} text-3xl font-bold`}>Swag Your Link</CardTitle>
        <CardDescription className="text-gray-600">Add some swagger to your shared link</CardDescription>
      </CardHeader>
      
        <CardContent className = "grid gap-6 pt-6">
          
            <div className="relative">
              <Input 
                id="link" 
                placeholder="Enter your link here" 
                className="pl-10 bg-white text-black placeholder-gray-400 placeholder:text-xs h-11"
              />
              <FiLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
        </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-[#161616] text-white hover:bg-black transition-colors duration-300 mt-7 mb-3  h-11">
          <FiZap className="mr-2" />
          Generate Swag Link
        </Button>
      </CardFooter>
    </Card>
    )
}