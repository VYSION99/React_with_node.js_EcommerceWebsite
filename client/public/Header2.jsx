import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
const [showLinks, setShowLinks] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const handleResize = () => {
setScreenWidth(window.innerWidth);
if (window.innerWidth >= 680) {
setShowLinks(true);
}
};

const handleToggle = () => {
setShowLinks(!showLinks);
};

useEffect(() => {
window.addEventListener("resize", handleResize);
return () => {
window.removeEventListener("resize", handleResize);
};
}, []);

return (
<nav className="navbar">
<div className="logo">Logo</div>
<div className="links-container">
<ul className={showLinks ? "links show-links" : "links"}>
<li>
<a href="/">Home</a>
</li>
<li>
<a href="/blog">Blog</a>
</li>
<li>
<a href="/projects">Projects</a>
</li>
<li>
<a href="/about">About</a>
</li>
<li>
<a href="/contact">Contact</a>
</li>
</ul>
</div>
<div className="toggle" onClick={handleToggle}>
{showLinks ? "X" : "="}
</div>
</nav>
);
}

export default Navbar;
