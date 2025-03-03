import { Carousel } from "antd";
import Slider1 from "@/images/slider/slide-1.jpg";
import Slider2 from "@/images/slider/slide-2.jpg";
import Slider3 from "src/images/z6363754674676_3616d5428bfd72bd3907d67a6716f32b1.jpg";
export default function Slider() {
  const renderCarosel = () => {
    return [Slider1.src, Slider3.src, Slider2.src].map((src) => (
      <div key={src} className="hero-slider">
        <div
          className="hero-slider"
          style={{
            height: "100%",
            width: "100%",
            background: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    ));
  };
  return (
    <>
      <section className="hero-slider hero-style-1" id="home">
        <div className="swiper-container">
          <div
            className="slide-main-text"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          >
            <div className="container">
              <div className="slide-title">
                <h2>
                  <span>Đình Văn</span> <i className="ti-heart" />{" "}
                  <span>Lan Anh</span>
                </h2>
              </div>
              <div className="wedding-date">
                <span>07 Tháng 3 2025</span>
              </div>
            </div>
          </div>
          <Carousel
            autoplay={{ dotDuration: true }}
            effect="fade"
            autoplaySpeed={5000}
          >
            {renderCarosel()}
          </Carousel>
        </div>
      </section>
    </>
  );
}
