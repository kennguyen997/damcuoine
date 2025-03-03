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
import { Image } from "antd";

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
              <Image
                src="https://cdn.biihappy.com/ziiweb/website/67c04b91403c2bf3fb01078a/47909f9dd0316ef22a9bdf957376bda5.jpeg"
                alt="Đình Văn & Lan Anh Wedding site!"
              />
            </div>
            <h2>Thank you!</h2>
          </div>
        </footer>
      </div>
    </>
  );
}
