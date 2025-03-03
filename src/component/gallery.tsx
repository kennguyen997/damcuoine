import { Carousel } from "antd";

export default function CarouselImage() {
  return (
    <Carousel  autoplay={true} autoplaySpeed={300000} infinite>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
}
