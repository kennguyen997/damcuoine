import { useState } from "react";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  return (
    <header id="header" className="site-header header-style-1">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="site-logo">
                <a href="/">
                  <h1>
                    Đình Văn <i className="ti-heart" /> Lan Anh
                  </h1>
                  <span>Just Married</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navigation navbar navbar-default"
      >
        <div className="container">
          <div className="navbar-header">
            <div className="logo">
              <a href="#home">
                <span>V</span> <i className="ti-heart" /> <span>A</span>
              </a>
            </div>
            <button
              type="button"
              className="open-btn"
              onClick={() => setIsOpenNav(true)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          {/* NAVBAR */}
          <div
            id="navbar"
            className={[
              "navbar-collapse",
              "collapse",
              "navigation-holder",
              isOpenNav ? "slideInn" : "",
            ].join(" ")} // slideInn TODO
          >
            <button
              className="close-navbar"
              onClick={() => setIsOpenNav(false)}
            >
              <i className="ti-close" />
            </button>
            <ul className="nav navbar-nav">
              <li>
                <a href="#couple">Cặp đôi</a>
              </li>
              <li>
                <a href="#gallery">Album Hình Cưới</a>
              </li>
              <li>
                <a href="#events">Sự kiện cưới</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
