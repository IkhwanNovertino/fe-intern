import Footer from '@/components/organisms/footer';
import Navbar from '@/components/organisms/navbar';
import React from 'react';

export default function LadingPageLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>

  );
}
