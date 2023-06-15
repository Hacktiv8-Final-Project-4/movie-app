/* eslint-disable react/prop-types */
import DefaultCarousel from "../Carousel"
import Header from "../Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <DefaultCarousel />
      {children}
    </>
  );
}