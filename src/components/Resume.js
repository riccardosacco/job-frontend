import React from "react";

const Resume = ({ editable = false }) => {
  return (
    <div id="resume" className="resume-document">
      <div className="resume-header">
        <div className="resume-title">
          <h2 className="resume-name" contentEditable={editable}>
            Riccardo Sacco
          </h2>
          <div className="resume-tagline" contentEditable={editable}>
            Full Stack Developer
          </div>
        </div>
        <div className="resume-contacts">
          <ul>
            <li contentEditable={editable}>+393391848457</li>
            <li contentEditable={editable}>riccardo@itwebservices.it</li>
            <li contentEditable={editable}>https://riccardosacco.com</li>
            <li contentEditable={editable}>Milan, Italy</li>
          </ul>
        </div>
      </div>
      <div className="resume-intro">
        <img src="img/avatar.png" alt="Riccardo Sacco" className="resume-img" />
        <div className="resume-bio" contentEditable={editable}>
          I’ve been passionate about programming since I was 13 and I love to
          learn. I believe in the learn-by-doing approach because I’ve always
          learned from mistakes. <br />I love my job so much that it doesn’t
          feel like I'm working. Sometimes I make decisions, sometimes I change
          my mind, but everytime I get to the best solution.
        </div>
      </div>
      <div className="resume-main">
        <section>
          <div className="works">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Work experiences
            </h3>
            <div className="works-container">
              <div className="work-item">
                <a
                  href="https://wildcodeschool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/resume/wildcodeschool.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      Lead Instructor
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      Wild Code School
                    </div>
                    <div className="work-duration" contentEditable={editable}>
                      <span className="work-date" contentEditable={editable}>
                        january 2020 - present
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        3 months
                      </span>
                    </div>
                    <div className="work-place" contentEditable={editable}>
                      Milan, Italy
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description" contentEditable={editable}>
                  Trainer at Wild Code School Milan, a school where students
                  learn JavaScript, NodeJS and React to become Full Stack
                  Developers
                </div>
              </div>
              <div className="work-item">
                <a
                  href="https://itwebservices.it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/resume/itwebservices.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      Full Stack Developer
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      IT Web Services
                    </div>
                    <div className="work-duration" contentEditable={editable}>
                      <span className="work-date" contentEditable={editable}>
                        october 2017 - present
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        2 years 5 months
                      </span>
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a
                  href="http://www.itproserv.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/resume/itproserv.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      IT Consultant
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      IT Professional Services SAGL
                    </div>
                    <div className="work-duration" contentEditable={editable}>
                      <span className="work-date" contentEditable={editable}>
                        june 2017 - present
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        2 years 9 months
                      </span>
                    </div>
                    <div className="work-place" contentEditable={editable}>
                      Lugano, Switzerland
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a
                  href="https://itwebgroup.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="img/resume/itwebgroup.jpeg"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      IT Manager
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      IT Web Group S.r.l.s
                    </div>
                    <div className="work-duration" contentEditable={editable}>
                      <span className="work-date" contentEditable={editable}>
                        march 2018 - october 2019{" "}
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        1 year 7 months
                      </span>
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="img/resume/classicbrandmilan.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      E-commerce Manager
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      CLASSIC Brand Milan
                    </div>
                    <div className="work-duration" contentEditable={editable}>
                      <span className="work-date" contentEditable={editable}>
                        january 2018 - june 2019{" "}
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        1 year 5 months
                      </span>
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="img/resume/heverhosting.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      Business Owner
                    </div>
                    <div className="work-company" contentEditable={editable}>
                      HeverHosting
                    </div>
                    <div className="work-duration">
                      <span className="work-date" contentEditable={editable}>
                        february 2014 - november 2018{" "}
                      </span>
                      <span className="work-time" contentEditable={editable}>
                        4 years 8 months
                      </span>
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
            </div>
          </div>
          <div className="projects">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Projects
            </h3>
            <div className="works-container">
              <div className="work-item">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="img/resume/loyable.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      Loyable
                    </div>
                    <div className="work-subtitle" contentEditable={editable}>
                      Digital loyalty platform for businesses to simplify
                      stamp-driven promotions
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="img/resume/ecolab.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      ECOLab
                    </div>
                    <div className="work-subtitle" contentEditable={editable}>
                      Virtualization of computers in school laboratories, to
                      save energy and be self-sustained with solar panels
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
              <div className="work-item">
                <a target="_blank" rel="noopener noreferrer">
                  <img
                    src="img/resume/3dprinting.png"
                    alt=""
                    className="work-icon"
                  />
                </a>
                <div className="work-content-container no-description">
                  <div className="work-content">
                    <div className="work-title" contentEditable={editable}>
                      3D Printing Laboratory
                    </div>
                    <div className="work-subtitle" contentEditable={editable}>
                      3D Printing laboratory in Milan, funded by ACLI, where we
                      do courses for children &amp; students
                    </div>
                  </div>
                  <div className="work-toggle">
                    <div className="arrow-toggle">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                    </div>
                  </div>
                </div>
                <div className="work-description"></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="skills">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Skills
            </h3>
            <div className="skills-container">
              <div className="skills-topic">
                <div className="skill-title" contentEditable={editable}>
                  Technical
                </div>
                <ul>
                  <li contentEditable={editable}>HTML5</li>
                  <li contentEditable={editable}>CSS3</li>
                  <li contentEditable={editable}>JavaScript</li>
                  <li contentEditable={editable}>React &amp; React Native</li>
                  <li contentEditable={editable}>Node.js</li>
                  <li contentEditable={editable}>Python</li>
                  <li contentEditable={editable}>PHP</li>
                </ul>
              </div>
              <div className="skills-topic">
                <div className="skill-title" contentEditable={editable}>
                  Professional
                </div>
                <ul>
                  <li contentEditable={editable}>Project management</li>
                  <li contentEditable={editable}>Business development</li>
                  <li contentEditable={editable}>E-commerce</li>
                  <li contentEditable={editable}>Mobile app development</li>
                  <li contentEditable={editable}>Cloud computing</li>
                  <li contentEditable={editable}>Big data</li>
                  <li contentEditable={editable}>Machine learning</li>
                  <li contentEditable={editable}>Internet of Things</li>
                  <li contentEditable={editable}>3D Printing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="education">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Education
            </h3>
            <div className="education-container">
              <div className="education-item">
                <img src="img/resume/polimi.png" alt="" />
                <div>
                  <div className="education-title" contentEditable={editable}>
                    Ingegneria Informatica
                  </div>
                  <div className="education-school" contentEditable={editable}>
                    Politecnico di Milano
                  </div>
                  <div className="education-date" contentEditable={editable}>
                    2019 - 2022
                  </div>
                </div>
              </div>
              <div className="education-item">
                <img src="img/resume/maria-ausiliatrice.png" alt="" />
                <div>
                  <div className="education-title" contentEditable={editable}>
                    Diploma Liceo Scientifico
                  </div>
                  <div className="education-school" contentEditable={editable}>
                    Istituto Maria Ausiliatrice
                  </div>
                  <div className="education-date" contentEditable={editable}>
                    2012 - 2017
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="languages">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Languages
            </h3>
            <div className="languages-container">
              <div className="language-item">
                <img src="img/flags/italy.svg" alt="Italian" />
                <div className="language-details">
                  <span className="language-name" contentEditable={editable}>
                    Italian
                  </span>
                  <span className="language-level" contentEditable={editable}>
                    (Native)
                  </span>
                </div>
              </div>
              <div className="language-item">
                <img src="img/flags/united-kingdom.svg" alt="English" />
                <div className="language-details">
                  <span className="language-name" contentEditable={editable}>
                    English
                  </span>
                  <span className="language-level" contentEditable={editable}>
                    (Professional)
                  </span>
                </div>
              </div>
              <div className="language-item">
                <img src="img/flags/france.svg" alt="French" />
                <div className="language-details">
                  <span className="language-name" contentEditable={editable}>
                    French
                  </span>
                  <span className="language-level" contentEditable={editable}>
                    (Working)
                  </span>
                </div>
              </div>
              <div className="language-item">
                <img src="img/flags/spain.svg" alt="Spanish" />
                <div className="language-details">
                  <span className="language-name" contentEditable={editable}>
                    Spanish
                  </span>
                  <span className="language-level" contentEditable={editable}>
                    (Working)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="interests">
            <h3 className="resume-section-heading" contentEditable={editable}>
              Interests
            </h3>
            <ul className="interests-container">
              <li contentEditable={editable}>Traveling</li>
              <li contentEditable={editable}>Fitness</li>
              <li contentEditable={editable}>Adventure</li>
              <li contentEditable={editable}>Motorcycle</li>
              <li contentEditable={editable}>Skiing</li>
              <li contentEditable={editable}>Drone Photography</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
