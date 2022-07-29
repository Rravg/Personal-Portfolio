import styles from "./styles/SectionOne.module.css";

import { useMediaQuery } from "react-responsive";

import PrimaryButton from "../../components/PrimaryButton";

import mobileImage from "../../images/homepage/mobile/image-homepage-hero@2x.jpg";
import tabletImage from "../../images/homepage/tablet/image-homepage-hero@2x.jpg";
import desktopImage from "../../images/homepage/desktop/image-homepage-hero@2x.jpg";

export default function SectionOne(): JSX.Element {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <section className={styles.section1}>
      <div className="container">
        <picture className={styles.picture}>
          <source srcSet={desktopImage} media="(min-width: 1440px)" />
          <source srcSet={tabletImage} media="(min-width: 768px)" />
          <img src={mobileImage} alt="Project Screenshot" width="100%"/>
        </picture>
        <div className={styles.boxContainer}>
          <h1 className={isDesktop ? `h1 ${styles.text}` : `h2 ${styles.text}`}>
            Hey, I’m Rodrigo Villalobos and I love building beautiful websites.
          </h1>
          <PrimaryButton text="about me" href="/#about-me" />
        </div>
      </div>
    </section>
  );
}
