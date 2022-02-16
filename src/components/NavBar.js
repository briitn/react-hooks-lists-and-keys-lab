import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const mapLinks=links.map((item)=>{
  console.log(item);return <a key= {item}href={"#"+item}>{item}</a>})

  return <nav>{mapLinks}</nav>;
}

export default NavBar;
