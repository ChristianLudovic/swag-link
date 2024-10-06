import Navbar from "@/components/navbar";
import Image from "next/image";
import image2 from "../assets/images/2.png";
import LinkCheckCard from "@/components/linkCheckCard";

export default function Home() {
  return (
    <div className="max-w-[1431px] mx-auto relative">
      <Navbar />
      <main className="flex space-x-6 justify-between mt-6 pb-[160px]">
        <LinkCheckCard />

        <Image src={image2} className="w-full rounded-xl" alt=""/>
      </main>
    </div>
  );
}
