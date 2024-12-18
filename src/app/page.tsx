import AuthoreCard from "@/components/AuthoreCard";

import Mega from "@/components/Mega";

import React from "react";

import Feature from "@/components/Feature";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    
    {/* <NavBar/> */}
    <Feature/>
    <Mega />
    <AuthoreCard />
    <Footer/>
   
   </div>
  );
}
