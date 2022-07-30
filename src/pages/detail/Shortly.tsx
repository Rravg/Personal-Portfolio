import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-url-shortening-hero@2x.png";
import heroTablet from "../../images/detail/tablet/image-url-shortening-hero@2x.png";
import heroDesktop from "../../images/detail/desktop/image-url-shortening-hero@2x.png";

import previewMobile1 from "../../images/detail/mobile/image-url-shortening-preview-1@2x.png";
import previewTablet1 from "../../images/detail/tablet/image-url-shortening-preview-1@2x.png";
import previewDesktop1 from "../../images/detail/desktop/image-url-shortening-preview-1@2x.png";

import previewMobile2 from "../../images/detail/mobile/image-url-shortening-preview-2@2x.png";
import previewTablet2 from "../../images/detail/tablet/image-url-shortening-preview-2@2x.png";
import previewDesktop2 from "../../images/detail/desktop/image-url-shortening-preview-2@2x.png";

export default function Shortly(): JSX.Element {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="Shortly"
      description="
        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page.
        The only JavaScript this project required was to enable the toggling of the mobile navigation."
      keywords={["Interaction Design", "Front End Development"]}
      technologies={["HTML", "CSS"]}
      background="
        This project was a front-end  challenge from Frontend Mentor. 
        It’s a platform that enables you to practice building websites to a design and project brief. 
        Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. 
        Creating these projects has helped me refine my workflow and solve real-world coding problems.
        I’ve learned something new with each project, helping me to improve and adapt my style."
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="movies"
      previous="blog"
      linkToWebsite="https://rravg.github.io/url-shortening-api/"
    />
  );
}
