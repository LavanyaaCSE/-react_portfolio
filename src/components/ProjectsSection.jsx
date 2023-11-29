import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Tribute page",
    description:
      "Tribute webpage was created with HTML,CSS and javascript",
    getImageSrc: () => require("..C:/Users/chefa/my-portfolio/src/images/Add a heading.png"),
  },
  {
    title: "Coursera clone",
    description:
      "Coursera clone webpage was created with HTML,CSS and javascript",
    getImageSrc: () => require("..C:/Users/chefa/my-portfolio/src/images/img.png"),
  },
  {
    title: "Gamming webpage",
    description:
      "Gamming webpage was created with HTML,CSS and javascript and games are Tic Tac Toe, Pikachu, etc",
    getImageSrc: () => require("..C:/Users/chefa/my-portfolio/src/images/GAMING.png"),
  },
  {
    title: "Comming soon webpage",
    description:
      "Comming soon webpage was created with HTML,CSS and javascript",
    getImageSrc: () => require("..C:/Users/chefa/my-portfolio/src/images/WhatsApp Image 2023-06-26 at 8.45.28 AM.jpeg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
