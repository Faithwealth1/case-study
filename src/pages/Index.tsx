import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center relative overflow-x-hidden bg-white">
      <div className="w-full flex justify-center px-5">
        <Header />
      </div>
      <main>
        <Hero />
        <CaseStudies />
        <Testimonials />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/672b902679b5b93444c4db7481df79a2fe6131f2?width=2880"
          alt="Call to action banner"
          className="w-full h-auto object-cover"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
