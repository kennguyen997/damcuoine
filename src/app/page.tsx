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
        <Infomation />
        <Calendar />
        <section className="section-accessibilities section-bg-img">
          <div className="container">
            <div className="row button-accessibilities">
              <div className="col col-lg-12">
                <div className="text-center btn-container">
                  <a
                    href="https://forms.gle/QEwbUySDyAoRWoS4A"
                    target="_blank"
                    className="accessibility-btn theme-btn"
                  >
                    <span className="content-button">
                      <Image
                        height={20}
                        preview={false}
                        className="access-section-icon"
                        src="https://cdn.biihappy.com/ziiweb/images/static/common/rsvp4.png"
                        alt="access-btn"
                      />
                      Xác nhận tham dự
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Event />
        <VideoWedding />
        <ListGallery />
        <footer className="site-footer footer-style-1">
          <div className="inner">
            <div className="couple-pic">
              <Image
                preview={false}
                style={{ width: "100%", height: "100%" }}
                src={avatar.src}
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
