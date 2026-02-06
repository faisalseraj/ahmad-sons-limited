import React from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { VisionValues } from './pages/VisionValues';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

export function SinglePage() {
  return (
    <>
      <div id="home">
        <Home standalone={false} />
      </div>
      <div id="about">
        <About standalone={false} />
      </div>
      <div id="services">
        <Services standalone={false} />
      </div>
      <div id="vision-values">
        <VisionValues standalone={false} />
      </div>
      <div id="careers">
        <Careers standalone={false} />
      </div>
      <div id="contact">
        <Contact standalone={false} />
      </div>
    </>
  );
}
