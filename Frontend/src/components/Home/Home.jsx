import React from "react";
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar";
import CategoryGrid from "../CategoryGrid/CategoryGrid";
import PopularProducts from "../PopularProduct/PopularProduct";
import Testimonials from "../Testimonials/Testimonials";
import ContactForm from "../ContactForm/ContactForm";

const Home = ()=>{
  return (
    <main className="main">
      <h1 className="MainHeadings" id="firstHeading">Shop Local, Shop Unique</h1>
      <h1 className="MainHeadings"> Discover Home-Based Treasures Online</h1>
      <h1 className="MainHeadings">One-Stop Online Marketplace for Unique Home-Based </h1>
      <SearchBar />
      <CategoryGrid />
      <PopularProducts />
      <Testimonials />
      <ContactForm />
    </main>
  )
}

export default Home