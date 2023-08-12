import React from "react";
import "./style.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Project from "./Project";

export default function Header() {
  const [menu, setmenu] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();
  const navigate = useNavigate();
  const [lightMode, Darkmode] = useState("fa-solid fa-moon");
  const [lightStyle, setStyle] = useState({
    color: "black",
    background: "White",
  });
  const darkMode = () => {
    if (lightStyle.color === "white") {
      setStyle({
        color: "black",
        background: " rgb(217, 226, 236)",
      });
      Darkmode("fa-solid fa-moon");
    } else {
      setStyle({
        color: "white",
        background: "black",
      });
      Darkmode("fa-solid fa-sun");
    }
  };

  const darkStyle = {
    color: "white",
    background: "#18191A",
  };
  const lightStyle1 = {
    color: "black",
    background: "#F3F2EF",
  };
  const style1 = {
    background: " rgb(204, 233, 249)",
  };
  const style2 = {
    color: "white",
    background: "#242526",
  };
  const contentlight = {
    color: "#B7C6C6",
    background: "#242526",
  };
  const contentdark = {
    background: "white",
  };
  const contentblue = {
    background: "#0076B2",
  };

  const handleChange = (event) => {
    setTimeout(() => {
      navigate(event.target.value);
    }, [5000]);
  };

  const handleMenuClick = () => {
    setmenu(!menu);
  };
  const handleProfileClick = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const navigation = [
    {
      id: 1,
      icon: <i class="fa-solid fa-house"></i>,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      icon: <i class="fa-solid fa-graduation-cap"></i>,
      title: "Education",
      link: "/education",
    },
    {
      id: 3,
      icon: <i class="fa-solid fa-earth-asia"></i>,
      title: "Skills",
      link: "/skills",
    },
    {
      id: 4,
      icon: <i class="fa-solid fa-file"></i>,
      title: "Projects",
      link: "/project",
    },
  ];
  return (
    <>
      {menu && (
        <div className="menuSlide">
          <div
            className="menulist"
            style={lightStyle.color === "white" ? style2 : style1}
          >
            <i
              onClick={handleMenuClick}
              style={
                lightStyle.color === "white"
                  ? { color: "white" }
                  : { color: "#0076B2" }
              }
              class="fa-solid fa-xmark"
            ></i>
            <div className="linkMenu">
              <Link
                className={
                  lightStyle.color === "white"
                    ? "pages_navigator color"
                    : "pages_navigator "
                }
                to="/"
              >
                <nobr>
                  <i class="fa-solid fa-house"></i>Home
                </nobr>
              </Link>
              <br />
              <Link
                className={
                  lightStyle.color === "white"
                    ? "pages_navigator color"
                    : "pages_navigator "
                }
                to="/education"
              >
                <nobr>
                  <i class="fa-solid fa-graduation-cap"></i>Education
                </nobr>
              </Link>
              <br />
              <Link
                className={
                  lightStyle.color === "white"
                    ? "pages_navigator color"
                    : "pages_navigator "
                }
                to="/skills"
              >
                <nobr>
                  <i class="fa-solid fa-earth-asia"></i>Skills
                </nobr>
              </Link>
              <br />
              <Link
                className={
                  lightStyle.color === "white"
                    ? "pages_navigator color"
                    : "pages_navigator "
                }
                to="/project"
              >
                <nobr>
                  <i class="fa-solid fa-file"></i>Projects
                </nobr>
              </Link>
              <br />
            </div>
          </div>
        </div>
      )}
      <div
        className={lightStyle.color === "white" ? "header border" : "header"}
        style={lightStyle.color === "white" ? style2 : style1}
      >
        <div
          className="insideHeader"
          style={lightStyle.color === "white" ? style2 : style1}
        >
          <div
            className={
              lightStyle.color === "white"
                ? "LogoSearchBar logo"
                : "LogoSearchBar "
            }
          >
            <i class="fa-brands fa-linkedin"></i>
            <div
              className={
                lightStyle.color === "white" ? "searchBar icon" : "searchBar "
              }
            >
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="pageMode">
            <div className="pages">
              {navigation.map((item) => (
                <Link
                  className={
                    lightStyle.color === "white"
                      ? "pages_navigator color"
                      : "pages_navigator "
                  }
                  to={item.link}
                >
                  {item.icon}
                  <p>{item.title}</p>
                </Link>
              ))}
            </div>
            <div
              className={lightStyle.color === "white" ? "mode color" : "mode "}
            >
              <div className="profileHome" onClick={() => handleProfileClick()}>
                <img className="profileImage" src="img/MyImage.png" alt="" />
                <div
                  className="profileNameEmail"
                  style={{ color: "rgb(23, 83, 117)" }}
                >
                  <h2 className={lightStyle.color === "white" ? "color" : ""}>
                    Rohan Shrestha
                  </h2>
                  <p className={lightStyle.color === "white" ? "color" : " "}>
                    nahorshrestha@gmail.com
                  </p>
                </div>
              </div>
              <div className="ProfileDropDown">
                <abbr
                  title={
                    lightStyle.color === "white" ? "light mode " : "dark mode"
                  }
                >
                  <i onClick={darkMode} class={lightMode}></i>{" "}
                </abbr>
              </div>

              <div onClick={handleMenuClick} className="menuline">
                <div
                  className="line"
                  style={
                    lightStyle.color === "white" ? contentdark : contentblue
                  }
                ></div>
                <div
                  className="line"
                  style={
                    lightStyle.color === "white" ? contentdark : contentblue
                  }
                ></div>
                <div
                  className="line"
                  style={
                    lightStyle.color === "white" ? contentdark : contentblue
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={lightStyle.color === "white" ? darkStyle : lightStyle1}>
        <div className="insideHome">
          <div
            className="profile"
            style={lightStyle.color === "white" ? contentlight : contentdark}
          >
            <div className="backgroundBox">
              <img src="img/MyImage.png" alt="" />
            </div>
            <div className="nameCollege">
              <p>Rohan Shrestha</p>
              <h6>Student at University of Wolverhampton</h6>
            </div>
            <hr />
            <div className="contactMe">
              <h5>location : </h5>
              <p> Panga - Kritipur</p>
            </div>
            <div className="contactMe">
              <h5>Contact : </h5>
              <p>9843989267</p>
            </div>
            <div className="contactMe">
              <h5>Gmail : </h5>
              <p>nahorshrestha@</p>
            </div>
            <div className="education">
              <h5>Education</h5>
              <p>SEE from Green Lawns Academy</p>
              <p>+2 from Kathmandu Bernhardt</p>
              <p>Currently studying at Herald College Kathmandu </p>
            </div>
            <div className="education">
              <h5>Skills</h5>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bootstrap</p>
              <p>tailwind</p>
              <p>Javascript</p>
              <p>React</p>
            </div>
          </div>
          <div className="pageContent">
            <form
              className="writeATwit"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <img src="img/MyImage.png" alt="" />
              <input
                type="text"
                placeholder="Write a linkedin post .."
                style={
                  lightStyle.color === "white" ? contentlight : contentdark
                }
              />
              <button type="submit">
                <i
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
                  class="fa-solid fa-caret-right"
                ></i>
              </button>
            </form>
            <div className="short">
              <hr />
              <nobr>
                <p
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
                >
                  Sort By :{" "}
                </p>
              </nobr>
              <select
                style={
                  lightStyle.color === "white" ? contentlight : contentdark
                }
                onChange={handleChange}
              >
                <option value="/">All catageory</option>
                <option value="/education">Education</option>
                <option value="/skills">Skills</option>
                <option value="/project">Projects</option>
              </select>
            </div>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    lightStyle={lightStyle.color}
                    contentdark={contentdark}
                    contentlight={contentlight}
                  />
                }
              />
              <Route
                path="/skills"
                element={
                  <Skills
                    lightStyle={lightStyle.color}
                    contentdark={contentdark}
                    contentlight={contentlight}
                  />
                }
              />
              <Route
                path="/education"
                element={
                  <Education
                    lightStyle={lightStyle.color}
                    contentdark={contentdark}
                    contentlight={contentlight}
                  />
                }
              />
              <Route
                path="/project"
                element={
                  <Project
                    lightStyle={lightStyle.color}
                    contentdark={contentdark}
                    contentlight={contentlight}
                  />
                }
              />
            </Routes>
          </div>
          <div className="AdditionalInfo">
            <div
              className="NamePictureDate additionalPadding"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <div className="NamePicture">
                <div className="profilePicUser">
                  <p>R</p>
                </div>
                <div>
                  {" "}
                  <p>Rohan Shrestha</p>{" "}
                  <p style={{ fontSize: "12px", fontWeight: "400" }}>
                    {showTime}
                    {showTime.slice(0, 2) < 12 ? " AM" : " PM"}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="additionalPadding"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <p>
                {" "}
                As a recent graduate with a strong passion for front-end web
                development, I am excited about the opportunity to apply for the
                open position of a front-end web developer at your company.{" "}
              </p>
            </div>
            <div
              className="additionalPadding"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <p>
                Although I am a fresher, I have completed several projects and
                have a solid understanding of front-end web development
                technologies such as HTML, CSS, JavaScript, and React.{" "}
              </p>
            </div>
            <div
              className="additionalPadding"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <p>
                I am a quick learner and eager to continue expanding my skills.
                I am confident that my strong foundation in front-end
                development and my ability to adapt to new technologies and
                challenges will allow me to make an immediate impact in the role
                of a front-end web developer.{" "}
              </p>
            </div>
            <div
              className="additionalPadding"
              style={lightStyle.color === "white" ? contentlight : contentdark}
            >
              <p>
                {" "}
                I would be grateful for the opportunity to be considered for
                this role and would welcome the chance to discuss my
                qualifications further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
