import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#e6e6ff] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold">
          <Image src="logo.png" alt="Blog logo" w={32} h={32} />
          <span>Blog</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 xl:gap-10 font-medium">
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
          </Link>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl focus:outline-none"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-full" : "-translate-x-0"
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most popular</Link>
        <Link to="/">About</Link>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login 👋</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
