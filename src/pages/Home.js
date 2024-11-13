import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FlexBox from "../components/FlexBox";
import ActionSection from "../components/ActionSection";

export default function Home () {
  return (
    <div>
       <Header />
       <Hero />
       <main>
        <FlexBox 
          title="Timeless Collection" 
          description="Discover pieces that ever go out of style." 
          image="" 
          reverse={false} 
        />
        <FlexBox
          title="Bonding Gifts" 
          description="Give the perfect gifts to show your love." 
          image="" 
          reverse ={true} 
        />

        <ActionSection />
       </main>
     
    </div>
  );
}

