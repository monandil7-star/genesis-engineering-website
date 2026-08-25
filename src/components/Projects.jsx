import { useState } from "react";
import { getImageUrl } from "../services/imageURL";
import "../Project.css";

function Projects({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const getProjectName = (project) => {
    return (
      project.name ||
      project.projectName ||
      project.title ||
      "Untitled Project"
    );
  };

  const getProjectCategory = (project) => {
    return (
      project.projectType ||
      project.category ||
      project.type ||
      "PROJECT"
    );
  };

  const getProjectImage = (project) => {
    // Project has no images
    if (!project.images || project.images.length === 0) {
      return "/images/project-placeholder.jpg";
    }

    // Sort images using displayOrder
    const sortedImages = [...project.images].sort(
      (a, b) =>
        (a.displayOrder || 999) -
        (b.displayOrder || 999)
    );

    // First preference: primary image
    const primaryImage = sortedImages.find(
      (image) => image.isPrimary === true
    );

    const selectedImage =
      primaryImage || sortedImages[0];

    if (!selectedImage?.imageUrl) {
      return "/images/project-placeholder.jpg";
    }

    return getImageUrl(selectedImage.imageUrl);
  };

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter(
          (project) => project.status === activeFilter
        );

  return (
    <section className="projects-page" id="projects">

      {/* HEADER */}
      <div className="projects-header">

        <div className="projects-header-label">
          OUR PROJECTS
        </div>

        <h1>
          Built with purpose.
          <br />
          <span>Designed to last.</span>
        </h1>

      </div>

      {/* FILTERS */}
      <div className="projects-filters">

        <button
          type="button"
          className={
            activeFilter === "ALL"
              ? "active"
              : ""
          }
          onClick={() => setActiveFilter("ALL")}
        >
          ALL
        </button>

        <button
          type="button"
          className={
            activeFilter === "ONGOING"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveFilter("ONGOING")
          }
        >
          ONGOING
        </button>

      </div>

      {/* PROJECT GRID */}
      {filteredProjects.length === 0 ? (

        <div className="projects-empty">
          No projects available.
        </div>

      ) : (

        <div className="projects-grid">

          {filteredProjects.map(
            (project, index) => {

              const projectName =
                getProjectName(project);

              const projectImage =
                getProjectImage(project);

              return (
                <div
                  className="project-card"
                  key={
                    project.id || index
                  }
                >

                  {/* IMAGE */}
                  <img
                    src={projectImage}
                    alt={projectName}
                    className="project-image"
                    onError={(e) => {
                      console.error(
                        "Project image failed:",
                        projectImage
                      );

                      e.currentTarget.src =
                        "/images/project-placeholder.jpg";
                    }}
                  />

                  {/* DARK OVERLAY */}
                  <div className="project-overlay"></div>

                  {/* PROJECT TYPE */}
                  <div className="project-category">
                    {getProjectCategory(project)}
                  </div>

                  {/* PROJECT CONTENT */}
                  <div className="project-content">

                    <h3>
                      {projectName}
                    </h3>

                    {project.location && (
                      <p className="project-location">
                        {project.location}
                      </p>
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      )}

    </section>
  );
}

export default Projects;