import { useState, useEffect, useRef } from 'react';
import { logo } from '../assets';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Products', link: '/' },
    { name: 'Help', link: '/' },
    { name: 'Contact', link: '/' }
  ];

  const [showMobileNav, setShowMobileNav] = useState(false);
  const mobileNavRef = useRef(null);

  const toggleMobileNav = () => {
    setShowMobileNav(prevShowMobileNav => !prevShowMobileNav);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        !event.target.classList.contains('GiHamburgerMenu') &&
        showMobileNav
      ) {
        setShowMobileNav(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showMobileNav]);

  return (
    <div className="pt-4 pb-4 xm:mx-4 xl:mx-56 xxl:mx-64">
      <div className="flex w-full justify-between items-center">
        <div>
          <img
            src={logo}
            alt="logo"
            className="xm:w-[90px] xl:w-[130px] cursor-pointer"
          />
        </div>
        {/* Desktop Navigation */}
        <div>
          <ul className="text-white font-semibold md:gap-12 md:flex hidden md:items-center">
            {Links.map(Link => (
              <li
                key={Link.name}
                className="hover:text-green-300 hover:scale-105"
              >
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <GiHamburgerMenu
            color="white"
            size={18}
            className="md:hidden block GiHamburgerMenu"
            onClick={toggleMobileNav}
          />
          <button className="text-white md:px-5 md:py-2 xm:px-3 xm:py-1 bg-gradient-to-r from-teal-400 to-blue-600 rounded-full font-semibold hover:scale-105">
            Login
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div ref={mobileNavRef}>
        {showMobileNav && (
          <ul className="text-white font-semibold absolute right-0 top-16 bg-blue-900 w-full h-full pt-[100px] flex flex-col text-center leading-[100px] text-[22px] opacity-90">
            {Links.map(Link => (
              <li
                key={Link.name}
                className="hover:text-green-300 hover:scale-105"
              >
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
