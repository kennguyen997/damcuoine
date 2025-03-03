import ImageBG from "@/images/z6365183924657_c79dd9f351ca8bd8865ca5378984afc6.jpg";
export default function VideoWedding() {
  return (
    <section
      className="video-section event-section section-padding p-t-0 p-b-0"
      id="video"
    >
      <div
        className="top-area"
        style={{
          color: "red",
          backgroundImage: `url(${ImageBG.src})`,
          backgroundPosition: 'right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h2>Xem video cưới của chúng tôi</h2>
        <p>
          Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm
          cho chuyến đi đáng giá.
        </p>
        <div className="video-btn">
          <a
            href="/Club/video/6366143536486.mp4"
            className="video-play-btn"
            data-type="iframe"
          >
            <i className="ti-control-play"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
