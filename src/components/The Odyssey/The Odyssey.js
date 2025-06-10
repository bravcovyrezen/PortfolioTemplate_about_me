import React from "react";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Odyssey({ innerRef }) {
  const epicProjects = info.portfolio;

  return (
    <Box
      ref={innerRef}
      id="The Odyssey"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="3rem"
    >
      {/* Section: About the Musical */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Epic: The Musical – The Odyssey Saga
      </h1>
      <p style={{ maxWidth: 700, textAlign: "center", marginBottom: "2rem" }}>
        <b>Epic: The Musical</b> is a modern musical adaptation of Homer's
        Odyssey, created by Jorge Rivera-Herrans. The musical brings the ancient
        Greek epic to life with powerful songs, dynamic storytelling, and a
        passionate fanbase. Each "saga" is a musical album that explores a
        different part of Odysseus's journey.
      </p>

      {/* Section: About the Original Odyssey */}
      <h2
        style={{
          fontSize: "2rem",
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        About the Original Odyssey
      </h2>
      <p style={{ maxWidth: 700, textAlign: "center", marginBottom: "2rem" }}>
        <b>The Odyssey</b> is an ancient Greek epic poem attributed to Homer. It
        tells the story of Odysseus, king of Ithaca, and his long journey home
        after the fall of Troy. Facing mythical creatures, gods, and countless
        obstacles, Odysseus's adventure is a tale of resilience, cleverness, and
        the enduring power of homecoming.
      </p>

      {/* Section: Albums (Sagas) */}
      <h2
        style={{
          fontSize: "2rem",
          marginTop: "2rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Albums (Sagas)
      </h2>
      <Grid container spacing={4} justifyContent="center">
        {epicProjects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              boxShadow={3}
              borderRadius="1rem"
              p={2}
              bgcolor="#fafafa"
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  maxWidth: 250,
                  borderRadius: "0.5rem",
                  marginBottom: "1rem",
                }}
              />
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                {project.title}
              </h3>
              <Box display="flex" gap="1rem" mt={1}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fa fa-safari" /> Listen
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.2rem" }}
                >
                  <i className="fa fa-youtube-play" /> YouTube
                </a>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
