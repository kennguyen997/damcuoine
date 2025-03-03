import { Statistic } from "antd";

export default function Calendar() {
  const { Countdown } = Statistic;
  const deadline = new Date("2025-03-07T11:00:00+07:00").getTime();
  return (
    <section className="invitation-section section-padding section-bg-img">
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <div className="invitation-box left">
              <div className="left-vec" />
              <div className="right-vec" />
              <div className="inner">
                <h2>Save the Date</h2>
                <span>For the wedding of</span>
                <h3>Đình Văn &amp; Lan Anh</h3>
                <p>
                  Một lời chúc của bạn chắc chắn sẽ làm cho đám cưới của chúng
                  tôi có thêm một niềm hạnh phúc!
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div className="invitation-box calendar-box">
              <div className="left-vec" />
              <div className="right-vec" />
              <div className="inner">
                <div className="mini_calendar">
                  <table>
                    <caption className="calendar-month"> March / 2025</caption>
                    <tbody>
                      <tr>
                        <th abbr="Sunday">Sun</th>
                        <th abbr="Monday">Mon</th>
                        <th abbr="Tuesday">Tue</th>
                        <th abbr="Wednesday">Wed</th>
                        <th abbr="Thursday">Thu</th>
                        <th abbr="Friday">Fri</th>
                        <th abbr="Saturday">Sat</th>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>
                          <div id="today">
                            <div id="content">7</div>
                            <div id="heart"></div>
                          </div>
                        </td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>
                          <div id="today">
                            <div id="content">9</div>
                            <div id="heart"></div>
                          </div>
                        </td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>31</td>
                        <td id="emptydays" colSpan={5}>
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="count-down-clock">
                <Countdown value={deadline} format="DD HH:mm:ss" />
                <div className="des">
                  <span>ngày</span>
                  <span>giờ</span>
                  <span>phút</span>
                  <span>giây</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
