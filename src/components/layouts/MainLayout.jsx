import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>ini header</header>
      <main>{children}</main>
      <footer>ini footer</footer>
    </div>
  );
};

export default MainLayout;
