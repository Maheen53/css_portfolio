import Head from "next/head";
import styles from "../styles/about.module.css"; // Scoped CSS using modules
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me page of the portfolio" />
      </Head>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/um.jpg" // Ensure the image is in the public folder
            alt="Profile Picture"
            className={styles.image}
            width={400}
            height={400}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.description}>
    Hi,I&apos;m Maheen Imtiaz, a passionate developer with expertise in
    <strong> Next.js</strong>, <strong>React</strong>, and modern web technologies.
    I love building innovative and user-friendly applications.
         I am also a passionate Web Developer specializing in UI/UX design. I love building dynamic and responsive websites using the latest technologies like Next.js. My focus is on crafting user-centric designs that blend functionality and aesthetics seamlessly.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
