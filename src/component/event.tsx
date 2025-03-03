import Background from "src/images/z6363754674676_3616d5428bfd72bd3907d67a6716f32b1.jpg";

export default function Event() {
  return (
    <section
      className="event-section section-padding p-t-0 section-bg-color"
      id="events"
    >
      <div
        className="top-area"
        style={{
          background: `url(${Background.src}) center center/cover no-repeat local`,
        }}
      >
        <h2>Sự Kiện Cưới</h2>
        <p className="">
          ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm
          chằm về cùng một hướng...
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="event-grids clearfix">
              <div className="grid section-bg-img">
                <h3>TIỆC CƯỚI NHÀ NỮ</h3>
                <div className="image-wrap">
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/0ea5ba9f2cbe132b3fe488103eb61817.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>11:00 AM 07/03/2025</strong>
                </p>
                <p>
                  Số 51, Thôn Lộc Châu 4, Xã Tân Nghĩa, Huyện Di Linh, Tỉnh Lâm
                  Đồng
                </p>
                <a
                  className="see-location-btn"
                  href="https://maps.app.goo.gl/tiiuXtbBgVaEHNmK9"
                  target="_blank"
                >
                  Xem chỉ đường
                </a>
              </div>
              {/* <div className="grid section-bg-img">
                    <h3>LỄ CƯỚI NHÀ NAM</h3>
                    <div className="image-wrap">
                      <img
                        src="https://cdn.biihappy.com/ziiweb/default/website/eee1cb36b560f0d80f513c4e9be666db.png"
                        alt=""
                      />
                    </div>
                    <p>
                      <strong>10:00 AM 09/03/2025</strong>
                    </p>
                    <p>
                      Xóm 3, Thôn Quỳnh Tân 1, Thị Trấn Buôn Trấp, Huyện Krông
                      Ana, Tỉnh Đắk Lắk
                    </p>
                    <a
                      className="see-location-btn"
                      href="https://maps.app.goo.gl/qXtgpBvKrxcSfwVQA"
                      target="_blank"
                    >
                      Xem chỉ đường
                    </a>
                  </div> */}
              <div className="grid section-bg-img">
                <h3>TIỆC CƯỚI NHÀ NAM</h3>
                <div className="image-wrap">
                  <img
                    src="https://cdn.biihappy.com/ziiweb/default/website/21b07b7d583692f49091b87facbf2c92.png"
                    alt=""
                  />
                </div>
                <p>
                  <strong>11:00 AM 09/03/2025</strong>
                </p>
                <p>
                  Xóm 3, Thôn Quỳnh Tân 1, Thị Trấn Buôn Trấp, Huyện Krông Ana,
                  Tỉnh Đắk Lắk
                </p>
                <a
                  className="see-location-btn"
                  href="https://maps.app.goo.gl/qXtgpBvKrxcSfwVQA"
                  target="_blank"
                >
                  Xem chỉ đường
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
