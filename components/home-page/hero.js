import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/coding-event.jpg"
          alt="Chagy"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chagy</h1>
      <p>I blog about my history me</p>
    </section>
  );
}
export default Hero;
