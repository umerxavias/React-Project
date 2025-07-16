import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-beta.tossdown.com/site/65b73fb7-2706-4440-87b9-9555fcd0ba80.webp"
          alt="Logo"
        />
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`list ${open ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Publications</a></li>
        <li><button className="navbtn">Get a Franchise</button></li>
        <li><button className="navbtn navactive">Order Online</button></li>
      </ul>
    </div>
  );
}

export default Navbar;