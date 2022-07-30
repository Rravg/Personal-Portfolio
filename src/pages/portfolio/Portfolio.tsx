import styles from "./styles/Portfolio.module.css";
import { useEffect } from "react";
import SectionThree from "../homepage/SectionThree";
import Project from "./Project";

import moviesMobil from "../../images/portfolio/mobile/image-portfolio-movies-reviews@2x.png";
import moviesTablet from "../../images/portfolio/tablet/image-portfolio-movies-reviews@2x.png";
import moviesDesktop from "../../images/portfolio/desktop/image-portfolio-movies-reviews@2x.png";

import todoMobil from "../../images/portfolio/mobile/image-portfolio-todo-app@2x.png";
import todoTablet from "../../images/portfolio/tablet/image-portfolio-todo-app@2x.png";
import todoDesktop from "../../images/portfolio/desktop/image-portfolio-todo-app@2x.png";

import blogMobil from "../../images/portfolio/mobile/image-portfolio-blog-app@2x.png";
import blogTablet from "../../images/portfolio/tablet/image-portfolio-blog-app@2x.png";
import blogDesktop from "../../images/portfolio/desktop/image-portfolio-blog-app@2x.png";

import urlMobil from "../../images/portfolio/mobile/image-portfolio-url-shortening@2x.png";
import urlTablet from "../../images/portfolio/tablet/image-portfolio-url-shortening@2x.png";
import urlDesktop from "../../images/portfolio/desktop/image-portfolio-url-shortening@2x.png";

export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "Minimalist Portfolio | My Projects";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.main}>
      <Project.Right
        title="Movies Review App"
        description="
          This project required me to build a FullStack application for a MongoDB sample Database.
          I used React TypeScript, along with Bootstrap for the areas that required interactivity."
        screenshots={[moviesMobil, moviesTablet, moviesDesktop]}
        param="movies"
      />
      <Project.Left
        title="Todo App"
        description="
          This project is a classic React application I incorporated the style and theme.
          I used React, along with CSS and Flexbox."
        screenshots={[todoMobil, todoTablet, todoDesktop]}
        param="todo"
      />
      <Project.Right
        title="Blog App"
        description="
          This was a small FullStack project which consisted of HTMl, CSS and Vanilla JavaScript.
          The project follows the Model Views Controller design patter to serve the static files."
        screenshots={[blogMobil, blogTablet, blogDesktop]}
        param="blog"
      />
      <Project.Left
        title="URL Shortening API application"
        description="
          This project was built using React TypeScript and pure CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive.
          I took a mobile-frist approach and used modern CSS lke Flexbox for layout purposes."
        screenshots={[urlMobil, urlTablet, urlDesktop]}
        param="shortly"
      />
      <SectionThree />
    </main>
  );
}
