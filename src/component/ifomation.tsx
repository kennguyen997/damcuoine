import Wife from "src/images/z6363767187271_9cfd80c52db91347582e6092caddb700.jpg";
import Husban from "src/images/12929cc5138d6df3676a8f62eb4809a8.webp";
import { Image } from "antd";
export default function Infomation() {
  return (
    <section className="couple-section section-padding" id="couple">
      <div className="container">
        <div className="row">
          <div className="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-0">
            <div className="section-title">
              <h2>Cô dâu &amp; Chú rể</h2>
              <p>
                Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều
                cần thiết cho chính bạn.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-10 col-lg-offset-1">
            <div className="couple-area">
              <div className="couple-row clearfix">
                <div className="img-holder">
                  <Image src={Husban.src} alt="" />
                </div>
                <div className="details">
                  <div className="inner">
                    <h2>Đình Văn</h2>
                      {/* <p>
                        Là một developer tận tâm, hiện đang làm việc tại một công
                        ty công nghệ ở Quận 1, thành phố Hồ Chí Minh. Một người
                        trầm lặng và ấm áp, luôn đề cao giá trị của tình cảm và
                        yêu thương gia đình. Với anh, "Gia đình giống như dòng mã
                        nguồn ổn định nhất của cuộc đời, là nơi mọi lỗi lầm đều
                        được sửa chữa bằng sự bao dung, và là nơi chứa đựng những
                        dòng code yêu thương vô tận để ta luôn muốn quay về deploy
                        hạnh phúc."
                      </p> */}
                    <ul className="social-links"></ul>
                  </div>
                </div>
              </div>
              <div className="couple-row last-row clearfix">
                <div className="details">
                  <div className="inner">
                    <h2>Lan Anh</h2>
                    {/* <p>
                      Là một cô gái đến từ vùng quê yên bình Nam Định, hiện đang
                      sống và làm việc tại Sài Gòn. Mang trong mình niềm đam mê
                      mạnh mẽ với taekwondo, cô vừa mạnh mẽ vừa dịu dàng như
                      chính con người mình. Là người luôn rạng rỡ với nụ cười
                      trên môi, cô yêu những bữa cơm ấm cúng bên gia đình, trân
                      trọng từng khoảnh khắc sum họp. Thích thưởng thức những
                      món ăn ngon và ấp ủ giấc mơ về một cuộc sống giản dị, nơi
                      có tiếng cười, tình yêu thương, và những giây phút được
                      sống trọn vẹn bên những người thân yêu.
                    </p> */}
                    <ul className="social-links"></ul>
                  </div>
                </div>
                <div className="img-holder">
                  <Image src={Wife.src} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
