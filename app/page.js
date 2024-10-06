import Navbar from "@/components/navbar";
import SwagLinkCard from "@/components/swagLinkCard";
import localFont from "next/font/local";
import Image from "next/image";
import image1 from "./assets/images/1.svg";
import illustraion from "./assets/images/swagIllustration.svg";

const gtSuperFont = localFont({
  src: '../public/rebond-grotesque/ESRebondGrotesqueTRIAL-Extrabold-BF661890400e032.otf',
  fontWeight: '900',
  fontStyle: 'normal',
  fontDisplay: 'swap',

})

export default function Home() {
  return (
    <div className="max-w-[1431px] mx-auto relative">
      <Navbar />
      <main className="flex justify-between mt-6 pb-[160px]">
        <SwagLinkCard />
        <div className="max-w-[430px] space-y-9">
          <h1 className={`${gtSuperFont.className} text-[64px] leading-[100%]`}>Take full control over your links </h1>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <svg class="tick" width="16" height="11" className="w-6 h-6 mt-1" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L10.6093 6.46881C8.47319 9.03217 7.40512 10.3139 6 10.3139C4.59488 10.3139 3.52681 9.03217 1.39067 6.46881L0 4.8" stroke="#2D264B" stroke-width="1.5" stroke-linecap="round" />
                
              </svg>
              <p className="leading-[150%] text-md"><span className="font-semibold">Share temporary passwords</span> : Generate limited-use access links for shared accounts.</p>
            </div>
            <div className="flex items-start space-x-4">
              <svg class="tick" width="16" height="11" className="w-6 h-6 mt-1" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L10.6093 6.46881C8.47319 9.03217 7.40512 10.3139 6 10.3139C4.59488 10.3139 3.52681 9.03217 1.39067 6.46881L0 4.8" stroke="#2D264B" stroke-width="1.5" stroke-linecap="round" />
                
              </svg>
              <p className="leading-[150%]"><span className="font-semibold">Sharing sensitive files</span> : Allow access to a confidential document a limited number of times.</p>
            </div>
            <div className="flex items-start space-x-4">
              <svg class="tick" width="16" height="11" className="w-6 h-6 mt-1" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L10.6093 6.46881C8.47319 9.03217 7.40512 10.3139 6 10.3139C4.59488 10.3139 3.52681 9.03217 1.39067 6.46881L0 4.8" stroke="#2D264B" stroke-width="1.5" stroke-linecap="round" />
                
              </svg>
              <p className="leading-[150%]"><span className="font-semibold">Product testing</span> : Offer a limited number of trials for a new service or software.</p>
            </div>
            
          </div>
        </div>
        <Image width={500} src={image1} alt=""/>
      </main>
      <Image src={illustraion} alt="illustration" className="absolute right-[100px] bottom-0"/>  
    </div>
  );
}
