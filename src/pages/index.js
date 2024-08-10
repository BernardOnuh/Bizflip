import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Chat from '../components/Footer/Chatbox/chat'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Chat/>
    </div>
  );
}
