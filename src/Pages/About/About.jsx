import React from "react";
import "./About.css";
import { RightOutlined } from "@ant-design/icons";

export default function About() {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">
          <div className="img">
            <img src="/light.jpg" alt="" />
          </div>
          <ul className="img-carousal">
            <li>
              <img src="/one.jpg" alt="" />
            </li>
            <li>
              <img src="/two.jpg" alt="" />
            </li>
            <li>
              <img src="/three.jpg" alt="" />
            </li>
            <li>
              <img src="/four.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h2 className="head">
          Modern outdoor lighting <br /> fot better quality of life
        </h2>
        <hr className="hr-line" />
        <h5 className="down-header">
          Location : Syria , Damascus <br />
          Products : LED Drivers advanced NFC outdoor
        </h5>
        <p className="right-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          accusantium nam! Maxime voluptate est tempore architecto. Quibusdam
          autem eligendi quam sit quia, aliquid consequatur consectetur
          accusamus pariatur, ipsa quo numquam. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Iste possimus similique, nemo at non
          error eius? Quos fugiat pariatur temporibus voluptates possimus,
          tempora harum nam, amet beatae deserunt eius optio. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Deserunt beatae non consequatur
          doloremque quasi sit laborum fuga ullam molestiae facilis aliquam
          perspiciatis dolor ea velit, quaerat perferendis itaque, commodi at?
          Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident facilis quas nisi dolor nulla maiores illum velit
          possimus magnam incidunt voluptatem voluptate itaque laborum, mollitia
          laboriosam a odio distinctio ipsam?
          <br />
          <b>More...</b>
        </p>
      </div>
    </div>
  );
}
