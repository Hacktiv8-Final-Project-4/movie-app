/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header";
import DefaultCarousel from "../components/carousel";

const App = () => {
  return (
    <>
      <Header />
      <DefaultCarousel />
      <main className="w-full my-12 px-5 xl:max-w-6xl xl:mx-auto xl:px-0">
        <h2 className="mb-5 text-xl capitalize font-medium">Home Page</h2>
      </main>
    </>
  );
};

export default App;
