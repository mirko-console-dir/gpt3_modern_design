
//# cmd rafce to initialize the component with the reactFunctionalComponent (rafce)
//Install npm i react-icons
import React from 'react';
import './App.css';
import './index.css';


import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar} from './components';
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
        <Navbar />
        <Header />
        </div>
    <Brand />
    <Features />

    <WhatGPT3 />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>

  )
}

export default App