import image1 from "@/images/listImage/IMG_8870.jpg";
import image2 from "@/images/listImage/IMG_8893.jpg";
import image3 from "@/images/listImage/IMG_8905.jpg";
import image4 from "@/images/listImage/IMG_8944.jpg";
import image5 from "@/images/listImage/IMG_9008.jpg";
import image6 from "@/images/listImage/IMG_9025.jpg";
import image7 from "@/images/listImage/IMG_9028.jpg";
import image8 from "@/images/listImage/IMG_9092.jpg";
import image9 from "@/images/listImage/IMG_9096.jpg";
import image10 from "@/images/listImage/IMG_9120.jpg";
import { Image } from "antd";

export default function ListGallery() {
  const renderListImage = () => {
    return [
      image1,
      image2,
      image3,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image4,
    ].map((item) => {
      return (
        <div className="gallery-item" data-index={0} key={item.src}>
          <a>
            <Image src={item.src} alt="" className="img img-responsive" />
          </a>
        </div>
      );
    });
    return (
      <div className="gallery-item" data-index={0}>
        <a>
          <img
            src="https://cdn.biihappy.com/ziiweb/default/website/galleries/61990322c41d7b37de534633/small.jpg"
            alt=""
            className="img img-responsive"
          />
        </a>
      </div>
    );
  };
  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-0">
            <div className="section-title">
              <h2>Album Hình Cưới</h2>
              <p>
                Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi
                yêu ai đó sâu sắc sẽ cho bạn dũng khí.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="gallery-container gallery-fancybox masonry-gallery">
              {renderListImage()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
