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
import VideoWedding from "@/component/videoWedding";
import avatar from "@/images/IMG_avatar.jpg";
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
        <Event />
        <VideoWedding />
        <ListGallery />
        <footer className="site-footer footer-style-1">
          <div className="inner">
            <div
              className="couple-pic"
              // style={{
              //   backgroundImage: `url(${avatar.src})`,
              //   backgroundPosition: "right",
              //   backgroundSize: "cover",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <Image style={{width: '100%', height: '100%'}} src={avatar.src} alt="Đình Văn & Lan Anh Wedding site!" />
              {/* <Image width={300} height={300} style={{
                height: '100%',
                 width: '100%'
              }} src={avatar.src} alt="Nguyễn Đình Văn &amp; Vũ Thị Lan Anh"/> */}
            </div>
            <h2>Thank you!</h2>
          </div>
        </footer>
      </div>
    </>
  );
}
