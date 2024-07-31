import Image from "next/image";

import HeroSection from "./components/HeroSection";
import Tabs from "./components/Tabs";
import ArticleCard from "./components/ArticleCard";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Tabs />
      <div className="w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between my-[6rem]">
        <ArticleCard/>
        <ArticleCard/>
      </div>
    </main>
  );
}
