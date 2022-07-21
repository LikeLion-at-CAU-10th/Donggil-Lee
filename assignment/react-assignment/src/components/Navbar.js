import React from "react";
import data from "../data/data";
import { Link } from "react-router-dom";
const Navbar = () => {
  console.log(data.index);
  return (
    <nav>
      {data.index.map((g, i) => (
        <Link to={`/${g.name}`} className="name">
          {g.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
