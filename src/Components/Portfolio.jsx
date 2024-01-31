/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "YOUTUBE CLONE ",
    description:
      "I spearheaded the development of a YouTube clone, a comprehensive video-sharing platform, showcasing my proficiency in full-stack web development. Leveraging cutting-edge technologies, the project seamlessly replicates the core functionalities of YouTube.",
    url: "https://github.com/RahaneSayali/youtube-lite",
  },
  {
    title: "Pharmacy-Django-Mini-Project",
    description:
      "I developed a Django-based mini project focused on pharmacy management, showcasing my proficiency in web development. This system efficiently handles key aspects of a pharmacy, including inventory management, prescription tracking, and user authentication.",
    url: "https://github.com/RahaneSayali/Pharmacy-Django-Mini-Project-master",
  },
  {
    title: "Amazon-Clone",
    description:
      "I crafted an Amazon clone, a dynamic e-commerce platform, to showcase my full-stack web development skills. The project mirrors key features of Amazon, providing users with a seamless online shopping experience.",
    url: "https://github.com/RahaneSayali/Amazon-Clone",
  },
  {
    title: "Weather-App",
    description:
      "Weather app written in HTML, CSS, and JavaScript using the APIs for fetching weather and geolocation information.",
    url: "https://github.com/RahaneSayali/Weather-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
