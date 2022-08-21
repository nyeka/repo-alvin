import React, { useState } from "react";
import Home from "./Home";
import Class from "./Class";
import Album from "./Album";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "../styles/Index.css";
import { getStudentsData, classPhotoData } from "../utils/data";
import useLocalStorage from "use-local-storage";
import { ThemeContext, themes } from "./ThemeWrapper";

export default function App() {
  const students = getStudentsData();
  const classPhoto = classPhotoData();
  const [savedCurrentClass, setSavedCurrentClass] = useLocalStorage(
    "current-class",
    ""
  );
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  // const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", toggleVisible);
  const currentClass = savedCurrentClass;

  return (
    <div className="app">
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="assets\images\general\Smansa-Logo.png alt="""></img>
            </span>
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <ThemeContext.Consumer>
                {({ changeTheme }) => (
                  <li
                    className="mode"
                    onClick={() => {
                      setDarkMode(!darkMode);
                      changeTheme(darkMode ? themes.light : themes.dark);
                    }}
                  ></li>
                )}
              </ThemeContext.Consumer>

              <CustomLink to="/" onClick={scrollToTop}>
                <i title="Home" className="bx bx-home-alt icon"></i>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A1");
                  scrollToTop();
                }}
              >
                <span title="IPA 1" className="text icon">
                  A1
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A2");
                  scrollToTop();
                }}
              >
                <span title="IPA 2" className="text icon">
                  A2
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A3");
                  scrollToTop();
                }}
              >
                <span title="IPA 3" className="text icon">
                  A3
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A4");
                  scrollToTop();
                }}
              >
                <span title="IPA 4" className="text icon">
                  A4
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A5");
                  scrollToTop();
                }}
              >
                <span title="IPA 5" className="text icon">
                  A5
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A6");
                  scrollToTop();
                }}
              >
                <span title="IPA 6" className="text icon">
                  A6
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A7");
                  scrollToTop();
                }}
              >
                <span title="IPA 7" className="text icon">
                  A7
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("A8");
                  scrollToTop();
                }}
              >
                <span title="IPA 8" className="text icon">
                  A8
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("S1");
                  scrollToTop();
                }}
              >
                <span title="IPS 1" className="text icon">
                  S1
                </span>
              </CustomLink>

              <CustomLink
                to="/Class"
                onClick={() => {
                  setSavedCurrentClass("S2");
                  scrollToTop();
                }}
              >
                <span title="IPS 2" className="text icon">
                  S2
                </span>
              </CustomLink>

              <CustomLink to="/Album" onClick={scrollToTop}>
                <i title="Other album" className="bx bx-photo-album icon"></i>
              </CustomLink>
              <div className="filler-nav"></div>
            </ul>
          </div>
        </div>
      </nav>

      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/class"
            element={
              <Class
                students={students}
                currentClass={currentClass}
                classPhoto={classPhoto}
              />
            }
          />
          <Route path="/album" element={<Album />} />
        </Routes>
        <button
          onClick={scrollToTop}
          style={{ display: visible ? "block" : "none" }}
          id="scroll-top-btn"
          title="Go to top"
        >
          <i className="bx bx-arrow-to-top"></i>
        </button>
        <div className="footer">
          <p>
            &#169; Copyright{" "}
            <a href="https://github.com/arma008/">arma008 on Github</a>. All
            photos are under approval of the owner. If you have a problem with
            the website or want to send a photo to display on album section,
            please contact <a href="https://www.instagram.com/alvinreihans_/">Alvin</a> or <a href="https://www.instagram.com/bintanggrff/">Bintang</a>.
          </p>
        </div>
      </section>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "nav-link active" : "nav-link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
