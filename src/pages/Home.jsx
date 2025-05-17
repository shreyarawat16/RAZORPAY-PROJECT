import React from 'react'
import  Navbar  from '../components/Navbar'
import  Hero  from '../components/Hero'
import  FeaturePage1  from '../components/FeaturePage1'
import  FeaturePage2  from '../components/FeaturePage2'

export default function Home(){
  return (
    <>
        <Navbar/>
        <Hero/>
        <FeaturePage1/>
        <FeaturePage2/>
    </>
  );
}

