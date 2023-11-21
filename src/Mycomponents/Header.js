import React, { useEffect } from "react";
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
  const [loadinig, setLoading] = useState(false);
  const [active, setActive] = useState(window.location.pathname);
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

  const skills = [
    {
      id: "1",
      name: "HTML",
      percent: "80",
    },
    {
      id: "2",
      name: "CSS",
      percent: "80",
    },
    {
      id: "3",
      name: "JavaScript",
      percent: "70",
    },
    {
      id: "4",
      name: "React JS",
      percent: "70",
    },
    {
      id: "5",
      name: "TypeScript",
      percent: "60",
    },
    {
      id: "6",
      name: "Tailwind",
      percent: "90",
    },
    {
      id: "7",
      name: "Bootstrap",
      percent: "90",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {loadinig ? (
        <>
          {menu && (
            <div className="menuSlide">
              <div
                className="menulist"
                style={lightStyle.color === "white" ? style2 : style1}
              >
                <div className="cross">
                  <i
                    onClick={handleMenuClick}
                    style={
                      lightStyle.color === "white"
                        ? { color: "white" }
                        : { color: "#0076B2" }
                    }
                    class="fa-solid fa-xmark"
                  ></i>
                </div>
                <div className="linkMenu">
                  <Link
                    className={
                      lightStyle.color === "white"
                        ? "pages_navigator2 color"
                        : active === "/"
                        ? "active2"
                        : "pages_navigator2 "
                    }
                    onClick={() => setActive("/")}
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
                        ? "pages_navigator2 color"
                        : active === "/education"
                        ? "active2"
                        : "pages_navigator2 "
                    }
                    onClick={() => setActive("/education")}
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
                        ? "pages_navigator2 color"
                        : active === "/skills"
                        ? "active2"
                        : "pages_navigator2 "
                    }
                    onClick={() => setActive("/skills")}
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
                        ? "pages_navigator2 color"
                        : active === "/project"
                        ? "active2"
                        : "pages_navigator2 "
                    }
                    onClick={() => setActive("/project")}
                    to="/project"
                  >
                    <nobr>
                      <i class="fa-solid fa-file"></i>Projects
                    </nobr>
                  </Link>
                  <br />
                  <div
                    onClick={darkMode}
                    className={
                      lightStyle.color === "white"
                        ? "pages_navigator2 color"
                        : "pages_navigator2 "
                    }
                  >
                    <abbr
                      title={
                        lightStyle.color === "white"
                          ? "light mode "
                          : "dark mode"
                      }
                    >
                      <i class={lightMode}></i>{" "}
                      {lightStyle.color === "white"
                        ? "Light mode "
                        : "Dark mode"}
                    </abbr>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className={
              lightStyle.color === "white" ? "header border" : "header"
            }
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
                    lightStyle.color === "white"
                      ? "searchBar icon"
                      : "searchBar "
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
                          : active === item.link
                          ? "active"
                          : "pages_navigator "
                      }
                      onClick={() => setActive(item.link)}
                      to={item.link}
                    >
                      {item.icon}
                      <p>{item.title}</p>
                    </Link>
                  ))}
                </div>
                <div
                  className={
                    lightStyle.color === "white" ? "mode color" : "mode "
                  }
                >
                  <div
                    className="profileHome"
                    onClick={() => handleProfileClick()}
                  >
                    <img
                      className="profileImage"
                      src="img/MyImage.png"
                      alt=""
                    />
                    <div
                      className="profileNameEmail"
                      style={{ color: "rgb(23, 83, 117)" }}
                    >
                      <h2
                        className={lightStyle.color === "white" ? "color" : ""}
                      >
                        Rohan Shrestha
                      </h2>
                      <p
                        className={lightStyle.color === "white" ? "color" : " "}
                      >
                        nahorshrestha@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="ProfileDropDown">
                    <abbr
                      title={
                        lightStyle.color === "white"
                          ? "light mode "
                          : "dark mode"
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
                style={
                  lightStyle.color === "white" ? contentlight : contentdark
                }
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
                  <p> Balkhu - Kathmandu</p>
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
                  <h5>Skills</h5>
                  {skills?.map((item) => {
                    return (
                      <p>
                        <b>{item?.id}.</b> {item?.name}
                        <div
                          style={{
                            background: "100%",
                            backgroundColor: "red",
                            height: "10px",
                            borderRadius: "20px",
                          }}
                        >
                          <div
                            style={{
                              background: `${item?.percent}%`,
                              backgroundColor: "green  !important",
                              height: "10px",
                              borderRadius: "20px",
                            }}
                          ></div>
                        </div>
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="pageContent">
                <form
                  className="writeATwit"
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
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
                        lightStyle.color === "white"
                          ? contentlight
                          : contentdark
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
                        lightStyle.color === "white"
                          ? contentlight
                          : contentdark
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
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
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
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
                >
                  <p>
                    {" "}
                    I am working as an Junior Frontend React JS Developer at
                    Ayata Incoperation.{" "}
                  </p>
                </div>
                <div
                  className="additionalPadding"
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
                >
                  <p>
                    I have completed several projects and have a solid
                    understanding of front-end web development technologies such
                    as HTML, CSS, JavaScript, and React.{" "}
                  </p>
                </div>
                <div
                  className="additionalPadding"
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
                >
                  <p>
                    I am a quick learner and eager to continue expanding my
                    skills. I am confident that my strong foundation in
                    front-end development and my ability to adapt to new
                    technologies and challenges will allow me to make an
                    immediate impact in the role of a front-end web developer.{" "}
                  </p>
                </div>
                <div
                  className="additionalPadding"
                  style={
                    lightStyle.color === "white" ? contentlight : contentdark
                  }
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
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
