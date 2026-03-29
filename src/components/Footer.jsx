import React from "react";
const footerText = [
  {
    title: "Mountains of the World",
    desc: "우리가 바라보는 풍경은 계속 달라집니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "Explore the Mountains",
    desc: "새로운 풍경과 이야기를 발견해 보세요.",
    link: "https://www.naver.com/",
  },
  {
    title: "Beyond the Horizon",
    desc: "지구 위 가장 높은 곳에서 시작되는 자연의 이야기를 소개합니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "Mountains of the World",
    desc: "우리가 바라보는 풍경은 계속 달라집니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "Explore the Mountains",
    desc: "새로운 풍경과 이야기를 발견해 보세요.",
    link: "https://www.naver.com/",
  },
  {
    title: "Beyond the Horizon",
    desc: "지구 위 가장 높은 곳에서 시작되는 자연의 이야기를 소개합니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "Explore the Mountains",
    desc: "새로운 풍경과 이야기를 발견해 보세요.",
    link: "https://www.naver.com/",
  },
  {
    title: "Mountains of the World",
    desc: "지구 위 가장 높은 곳에서 시작되는 자연의 이야기를 소개합니다.",
    link: "https://www.naver.com/",
  },
];
const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer_inner">
        <div className="footer_text">
          <span>Mountains of the World Project</span>
          <span>© funnymoon</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="title">
              <a href="#">sign up</a>
            </div>
            <p className="desc">지구 곳곳의 산과 자연의 이야기를 기록합니다</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer_right">
          © 2025 funnymoon
          <br />이 사이트는 VITE를 이용하여 제작하였습니다.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
