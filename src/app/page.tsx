"use client";
import { useEffect, useState } from "react";
import Slider from "@/component/slider";
import Header from "@/component/header";
import Calendar from "@/component/calendar";
import Event from "@/component/event";
import Infomation from "@/component/ifomation";
import FallingHearts from "@/component/fallingHearts";
import MusicPlayer from "@/component/musicPlayer";
import ListGallery from "@/component/listImage";

export default function Home() {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
    // return () => {
    //   window.removeEventListener("load", () => {});
    // };
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div
          className="preloader"
          style={{ display: isLoading ? "block" : "none" }}
        >
          <div className="middle">
            <i className="fi flaticon-favorite-heart-button" />
            <i className="fi flaticon-favorite-heart-button" />
            <i className="fi flaticon-favorite-heart-button" />
            <i className="fi flaticon-favorite-heart-button" />
          </div>
        </div>
        <MusicPlayer />
        <FallingHearts />
        <Header />
        <Slider />
        <Calendar />
        <Infomation />
        <ListGallery />
        <Event />
        <footer className="site-footer footer-style-1">
          <div className="inner">
            <div className="couple-pic">
              <img
                src="https://cdn.biihappy.com/ziiweb/website/67c04b91403c2bf3fb01078a/47909f9dd0316ef22a9bdf957376bda5.jpeg"
                alt="Đình Văn & Lan Anh Wedding site!"
              />
            </div>
            <h2>Thank you!</h2>
          </div>
        </footer>
      </div>
      <div id="menu-access" className="">
        <div className="btn-menu-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        <ul className="p-0 m-0 list-menu-icon">
          <li className="text-center">
            <a
              href="https://damcuoine0703.iwedding.info/rsvp"
              target="_blank"
              className="text-white"
            >
              <span className="content-button tooltipBtn">
                <span className="tooltiptext">Xác nhận tham dự</span>
                <img
                  className="access-icon"
                  src="https://cdn.biihappy.com/ziiweb/images/static/common/rsvp4.png"
                  alt=""
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
