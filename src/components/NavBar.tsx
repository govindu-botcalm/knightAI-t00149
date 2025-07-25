import { useState } from "react";
import logo from "../assets/images/assets_task_01jyp1r6s0fvbshaccmppwrqps_1750939549_img_0 4.svg";
import menu from "../assets/icons/Frame 916.svg";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/features", label: "Features" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="fixed z-1000 mx-auto mt-[30px] flex h-[40px] w-full max-w-[1920px] items-center justify-center px-[16px] md:mt-[2.6%] md:h-[50px] md:px-0 lg:h-[60px] xl:h-[73px] 2xl:mt-[50px]">
      <div className="hidden h-full w-full md:flex md:flex-304"></div>
      <div className="mx-auto flex h-full w-full flex-1236 items-center justify-between">
        <div className="flex h-full w-full flex-111 md:items-center">
          <img src={logo} alt="Logo" className="justify-end object-contain" />
        </div>
        <div className="flex h-full w-full flex-40"></div>
        <button
          className="h-full flex-col gap-1.5 focus:outline-none md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <img src={menu} alt="menu" className="object-contain" />
        </button>

        <ul
          className={`flex-1085 transition-all duration-300 ${
            open ? "flex" : "hidden"
          } hidden h-full w-full flex-col items-center justify-around rounded-full border-[2px] border-white md:static md:flex md:flex-row md:items-center md:bg-[#DFDFDF8C]`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-center leading-[24px] font-bold md:text-[14px] 2xl:text-[16px]"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden h-full w-full md:flex md:flex-380"></div>
    </nav>
  );
};

export default NavBar;
