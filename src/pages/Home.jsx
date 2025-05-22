import React from 'react'
import  Navbar  from '../components/Navbar'
import  Hero  from '../components/Hero'
import  FeaturePage1  from '../components/FeaturePage1'
import  FeaturePage2  from '../components/FeaturePage2'
import FeaturePage3 from '../components/FeaturePage3'
import FeaturePage4 from '../components/FeaturePage4'
import FeaturePage5 from '../components/FeaturePage5'
import SuperChargeSection from '../components/SuperChargeSection'

export default function Home(){
  return (
    <>
    <div className="overflow-x-hidden relative">
        <Navbar/>
        <Hero/>
        <FeaturePage1/>
        <FeaturePage2/>
        <FeaturePage3/>
        <FeaturePage4/>
        <FeaturePage5/>
        <SuperChargeSection/>
    </div>
       
    </>
  );
}

