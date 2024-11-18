import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FlexBox from "../components/FlexBox";
import ActionSection from "../components/ActionSection";
import Divider from "../components/Divider";


export default function Home () {
  return (
    <div>
       <Header />
       <Hero />
       <main>
        <FlexBox 
          title="Lengend Collection" 
          description="Discover pieces that ever go out of style." 
          image="/images/lengend.jpg" 
          reverse={false} 
        />
        <Divider title="TEST DIVIDER" />
        <FlexBox
          title="Bonding Gifts" 
          description="Give the perfect gifts to show your love." 
          image="/images/bond1.jpg"
          reverse ={true} 
        />
        <Divider />

        <ActionSection />
       </main>
     
    </div>
  );
}

