import { Fragment, useEffect, useState } from "react";
import "./Navbar.css";
import { BsList } from "react-icons/bs";
import nav_arrow from "../../assets/nav_arrow.svg";
import nav_down_arrow from "../../assets/navbar-down-arrow.png";
import nav_dot from "../../assets/nav_dot.svg";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setIsMobile] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const offset = window.scrollY;
      if (offset > 75) {
        setFixedNavbar(true);
      } else {
        setFixedNavbar(false);
      }
    });
    // navbar up/down event
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        setIsNavVisible(false);
      }
      if (y < lastVal) {
        setIsNavVisible(true);
      }
      if (y === 0) {
        setIsNavVisible(true);
      }
      lastVal = y;
    };
  }, []);

  const checkIsMobile = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const isServicesOpen = () => {
    if (!isOpen) {
      servicesMenuOpen();
    } else {
      servicesMenuClose();
    }
  };

  const servicesMenuOpen = () => {
    setIsOpen(true);
  };

  const servicesMenuClose = () => {
    setIsOpen(false);
  };

  const closeNavbar = () => {
    setShowMenu(false);
    setIsOpen(false);
  };
  return (
    <>
      <Fragment>
        <header
          className={`header ${fixedNavbar ? "navbar_scroll" : ""}}`}
          //   className={`header ${fixedNavbar ? "navbar_scroll" : ""}`}
          style={{ top: isNavVisible ? "0" : "-80px" }}
        >
          <div className="container">
            <div className="header_container">
              <p>
                <img src={logo} width={136} height={50} />
              </p>
              <div className="main_nav">
                <nav className="primary_navigation">
                  <ul>
                    <li onMouseEnter={() => servicesMenuClose()}>
                      <p className="nav_link">About Us</p>
                    </li>
                    <Fragment>
                      <li onMouseEnter={() => servicesMenuOpen()} onClick={() => setIsOpen(!open)}>
                        <span className="nav_link">
                          Our Services
                          {isOpen ? (
                            <img
                              style={{ position: "absolute", top: "2px" }}
                              src={nav_down_arrow}
                              height={20}
                            />
                          ) : (
                            <img
                              style={{
                                marginLeft: "5px",
                                position: "absolute",
                                top: "8px",
                              }}
                              src={nav_dot}
                              height={7}
                            />
                          )}
                        </span>
                      </li>
                    </Fragment>
                    <li onMouseEnter={() => servicesMenuClose()}>
                      <p className="nav_link">Our Work</p>
                    </li>
                    <li>
                      <p>
                        <div className="nav_btn_started">
                          <span>Get Started</span>
                        </div>
                      </p>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className="menu_icon"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setIsOpen(false);
                }}
              >
                <BsList style={{ fontSize: "2rem" }} />
              </div>
              {/* Mobile Navbar */}
              <div className={showMenu ? "show_mobile_menu" : "mobile_nav"}>
                <nav className="mobile_navigation">
                  <ul>
                    <li>
                      <p className="nav_link" onClick={closeNavbar}>
                        About Us
                      </p>
                    </li>
                    <li
                      onClick={() => {
                        isServicesOpen();
                        checkIsMobile();
                      }}
                    >
                      Our Services <img src={nav_down_arrow} height={18} />
                    </li>
                    {isOpen && mobile ? (
                      <div className="mobile_services_container">
                        <div className="dropdown">
                          <p onClick="closeNavbar">
                            <div className="dropdown_design">
                              <h1>Design</h1>
                              <div className="dropdown_paragraph">
                                <p>Hand Craft the User Experience</p>
                                <img src={nav_arrow} alt=""></img>
                              </div>
                            </div>
                          </p>
                          <p onClick={closeNavbar}>
                            <div className="dropdown_technology">
                              <h1>Technology</h1>
                              <div className="dropdown_paragraph">
                                <p>Leverage The Power of Code</p>
                                <img src={nav_arrow} alt=""></img>
                              </div>
                            </div>
                          </p>
                          <p onClick={closeNavbar}>
                            <div className="dropdown_business">
                              <h1>Business</h1>
                              <div className="dropdown_paragraph">
                                <p>Creative Strategies for Brands</p>
                                <img src={nav_arrow} alt=""></img>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    <li>
                      <p className="nav_p" onClick={closeNavbar}>
                        Our Work
                      </p>
                    </li>
                    <li>
                      <p className="nav_btn" onClick={closeNavbar}>
                        Contact Us
                      </p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* -----------------navber Dropdown--------- */}
            {isOpen && !mobile ? (
              <div
                className="dropdown"
                onMouseLeave={() => {
                  servicesMenuClose();
                }}
                onClick={() => {
                  servicesMenuClose();
                }}
              >
                <p>
                  <div className="dropdown_design">
                    <h1>Design</h1>
                    <div className="dropdown_paragraph">
                      <p>Hand Craft the User Experience</p>
                      <img src={nav_arrow} alt=""></img>
                    </div>
                  </div>
                </p>

                <p>
                  <div className="dropdown_technology">
                    <h1>Technology</h1>
                    <div className="dropdown_paragraph">
                      <p>Leverage The Power of Code</p>
                      <img src={nav_arrow} alt=""></img>
                    </div>
                  </div>
                </p>
                <p>
                  <div className="dropdown_business">
                    <h1>Business</h1>
                    <div className="dropdown_paragraph">
                      <p>Creative Strategies for Brands</p>
                      <img src={nav_arrow} alt=""></img>
                    </div>
                  </div>
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </header>
      </Fragment>
    </>
  );
};

export default Navbar;
