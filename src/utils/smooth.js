import Lenis from "lenis";

export default function smooth() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  return lenis;
}
