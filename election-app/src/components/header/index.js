import React from "react";

const Header = ({ title }) => {
  return (
    <div class="jumbotron jumbotron my-5">
      <div class="container">
        <h1 class="display-4 text-center font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
