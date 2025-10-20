import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const handleImageSelect = (selectedIndex) => {
    setActiveImageIndex(selectedIndex);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.title || "Project"} />
                <div className="content">
                  <h3 className="project-title">{data.title || "Project"}</h3>
                  <p className="project-desc">{data.description}</p>
                  <a
                    href={data.link || data.githubLink || data.playStoreLink || data.appStoreLink || data.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>

                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          size="xl"
          centered
          className="project-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title || "Project Details"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <div className="modal-content-wrapper">
                {/* Image Gallery/Carousel */}
                <div className="modal-image-section">
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    <>
                      <Carousel
                        activeIndex={activeImageIndex}
                        onSelect={handleImageSelect}
                        className="project-carousel"
                        interval={null}
                      >
                        {selectedProject.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <div className="carousel-image-container">
                              <img
                                src={image}
                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                className="modal-project-image"
                              />
                            </div>
                          </Carousel.Item>
                        ))}
                      </Carousel>

                      {/* Thumbnail Gallery */}
                      <div className="thumbnail-gallery">
                        {selectedProject.images.map((image, index) => (
                          <div
                            key={index}
                            className={`thumbnail-item ${activeImageIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveImageIndex(index)}
                          >
                            <img src={image} alt={`Thumbnail ${index + 1}`} />
                            <div className="thumbnail-overlay">
                              <span>{index + 1}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="modal-image-container">
                      <img
                        src={selectedProject.images?.[0] || selectedProject.img}
                        alt={selectedProject.title}
                        className="modal-project-image"
                      />
                    </div>
                  )}
                </div>

                <div className="modal-details">
                  <h4>Description</h4>
                  <p className="modal-description">{selectedProject.description}</p>

                  {selectedProject.technologies && (
                    <div className="technologies-section">
                      <h5>Technologies Used</h5>
                      <div className="tech-tags">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.features && (
                    <div className="features-section">
                      <h5>Key Features</h5>
                      <ul className="features-list">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.longDescription && (
                    <div className="long-description-section">
                      <h5>About This Project</h5>
                      <p className="long-description">{selectedProject.longDescription}</p>
                    </div>
                  )}

                  {selectedProject.challenges && (
                    <div className="challenges-section">
                      <h5>Challenges & Solutions</h5>
                      <p className="challenges-text">{selectedProject.challenges}</p>
                    </div>
                  )}
                </div>

                <div className="modal-actions">
                  {selectedProject.playStoreLink && (
                    <a
                      href={selectedProject.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn playstore-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      <span>Google Play</span>
                    </a>
                  )}

                  {selectedProject.appStoreLink && (
                    <a
                      href={selectedProject.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn appstore-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      <span>App Store</span>
                    </a>
                  )}

                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn website-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>View Website</span>
                    </a>
                  )}

                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn github-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}

                  {selectedProject.demoVideo && (
                    <a
                      href={selectedProject.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn demo-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
                      </svg>
                      <span>Demo Video</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};