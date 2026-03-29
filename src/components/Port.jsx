import React, { useEffect, useRef } from "react";
import { portText } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Port = () => {
  const horizontalRef = useRef(null);
  const sectionRef = useRef([]); // 10개의 데이터가 들어갈예정

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const sections = sectionRef.current;
    // const wrap = horizontal.querySelector(".port_wrap");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 56px",
        end: () => "+=" + horizontal.offsetWidth,
        // end: () => "+=" + (wrap.scrollWidth - window.innerWidth),
        pin: true,
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true, //refresh될 때마다 다시 계산
        anticipatePin: 1, //pin 시작할 때 화면 튀는 현상(jump)을 줄여주는 옵션
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section id="port" ref={horizontalRef}>
      <div className="port_inner">
        <h2 className="port_title">Mountain Ranges</h2>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <article
              className={`port_item p${key + 1}`}
              key={key}
              ref={(el) => (sectionRef.current[key] = el)}>
              <span className="num">{port.num}.</span>
              <a href={port.code} target="_blank" className="img">
                <img src={port.img} alt={port.name} />
              </a>
              <h3 className="title">{port.title}</h3>
              <p className="desc">{port.desc}</p>
              <a href={port.view} target="_blank" className="site">
                자세히 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
