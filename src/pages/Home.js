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
          title="Engagment" 
          description="Give the perfect engagement rings to show your love." 
          image="/images/engagement2.jpg" 
          reverse={false} 
        />
        <Divider title="TEST DIVIDER" />
        <FlexBox
          title="wedding Bands" 
          description="Discover pieces that ever go out of style." 
          image="/images/bands.jpg"
          reverse ={true} 
        />
       <FlexBox title="Best Selling Earrings" description="Earrings for everyday and up dressing" image="images/earrings1.jpg" reverse={false}/>

        <ActionSection />
       </main>
     
    </div>
  );
}

