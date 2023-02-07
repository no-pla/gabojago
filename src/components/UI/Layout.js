import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
