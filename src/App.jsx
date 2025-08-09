import React from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSelling from './components/TopSelling';
import CustomerReviews from './components/CustomerReviews';
import O2Collection from './components/O2Collection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-24">
        <Hero />
        {/* <TrendyPlants /> */}
        <TopSelling />
        <CustomerReviews />
        <O2Collection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
