import React from "react";
import Portfolio from "./components/Portfolio";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Doubts from "./components/Doubts";
import Partners from "./components/Partners";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Amazing from "./components/Amazing";
import Services from "./components/Services";

function App() {
  // const portfolioLinks = [
  //   {
  //     title: "Threads",
  //     caption: "Illustration",
  //   },
  //   {
  //     title: "Explore",
  //     caption: "Graphic Design",
  //   },
  //   {
  //     title: "Finish",
  //     caption: "Identity",
  //   },
  //   {
  //     title: "Lines",
  //     caption: "Branding",
  //   },
  //   {
  //     title: "Southwest",
  //     caption: "Website Design",
  //   },
  //   {
  //     title: "Window",
  //     caption: "Photography",
  //   },
  //   {
  //     title: "Pizza",
  //     caption: "I love pizza!",
  //   },
  //   {
  //     title: "Pizza",
  //     caption: "I love pizza!",
  //   },
  //   {
  //     title: "Pizza",
  //     caption: "I love pizza!",
  //   },
  // ];

  return (
    <div className="App">
      
      <Menu menu={Menu}></Menu>

      <Header header={Header}></Header>

      <Services services={Services}></Services>

      {/* <Portfolio portfolioLinks={portfolioLinks}></Portfolio> */}

      <Amazing amazing={Amazing}></Amazing>

      <Partners partners={Partners}></Partners>

      <Doubts doubts={Doubts}></Doubts>

      <Contact contact={Contact}></Contact>

      <Footer footer={Footer}></Footer>
    </div>
  );
}

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./assets/img/", false, /\.(png|jpe?g|svg)$/)
);

export default App;
