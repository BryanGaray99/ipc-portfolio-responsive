import "./Destop1440Px.css";
import { Navbar2 } from "../Navbar2/Navbar2.jsx";

export const Destop1440Px = ({ className, ...props }) => {
  return (
    <div className={"destop-1440-px " + className}>
      <Navbar2
        text="About Me"
        text2="Projects"
        visibleComponent={false}
        visibleComponent2={false}
        visibleComponent3={false}
        visibleComponent4={false}
        visibleComponent5={true}
        visibleComponent6={true}
        visibleComponent7={false}
        className="navbar-instance"
      ></Navbar2>
      <div className="header">
        <div className="header-left">
          <div className="content">
            <div className="hello-i-m-bryan-garay-software-engineer">
              <span>
                <span className="hello-i-m-bryan-garay-software-engineer-span">
                  👋 Hello, I’m <br />
                </span>
                <span className="hello-i-m-bryan-garay-software-engineer-span2">
                  Bryan Garay <br />
                </span>
                <span className="hello-i-m-bryan-garay-software-engineer-span">
                  Software Engineer
                </span>
              </span>{" "}
            </div>
          </div>
          <div className="currently-i-am-working-as-a-test-automation-engineer-at-globant">
            Currently I am working as a Test Automation Engineer at Globant.{" "}
          </div>
          <div className="button">
            <div className="contact-me">Contact me </div>
          </div>
        </div>
        <div className="frame-5">
          <img className="group-11-1" src="group-11-10.png" />
        </div>
      </div>
      <div className="frame-1-about-me">
        <div className="my-skill">
          <div className="section-title">
            <div className="content2">
              <div className="about-me">About Me </div>
            </div>
          </div>
          <div className="row">
            <div className="content3">
              <div className="section-title2">
                <div className="strategy-direction">
                  <img className="product-chain-1" src="product-chain-10.png" />
                </div>
                <div className="content">
                  <div className="who-i-am">¿Who I am? </div>
                  <div className="i-am-a-passionate-software-engineer-located-in-guayaquil-ecuador-i-am-25-years-old">
                    I am a passionate software engineer, located in Guayaquil,
                    Ecuador. I am 25 years old.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="content4">
              <div className="section-title3">
                <div className="ui-ux-design">
                  <img className="feather-pen-1" src="feather-pen-10.png" />
                </div>
                <div className="content2">
                  <div className="my-studies">My Studies </div>
                  <div className="i-am-currently-in-the-last-year-of-the-software-engineer-career-at-uisek-ecuador-i-have-a-professional-certification-ctfl-from-istqb">
                    I am currently in the last year of the Software Engineer
                    career at UISEK, Ecuador.
                    <br />I have a professional certification CTFL from ISTQB.{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="content4">
              <div className="section-title3">
                <div className="branding-logo">
                  <img className="tag-1" src="tag-10.png" />
                </div>
                <div className="content2">
                  <div className="area-of-expertise">Area of Expertise </div>
                  <div className="i-have-2-years-of-experience-as-test-automation-engineer-and-worked-for-a-year-as-a-frontend-and-backend-developer">
                    I have 2 years of experience as Test Automation Engineer and
                    worked for a year as a Frontend and Backend Developer.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-2-projects">
        <div className="my-skill2">
          <div className="section-title">
            <div className="content2">
              <div className="projects">Projects </div>
            </div>
          </div>
          <div className="row">
            <div className="content5">
              <img className="image" src="image-10.png" />
              <div className="section-title2">
                <div className="content">
                  <div className="name-decision-tree-machine-learning-web-simulator">
                    <span>
                      <span className="name-decision-tree-machine-learning-web-simulator-span">
                        Name:
                      </span>
                      <span className="name-decision-tree-machine-learning-web-simulator-span2">
                        Decision Tree Machine Learning Web Simulator
                      </span>
                    </span>{" "}
                  </div>
                  <div className="description-decision-tree-simulator-is-a-web-application-built-with-django-that-allows-you-to-predict-data-using-machine-learning-models-main-skills-html-css-java-script-python-django-postgre-sql">
                    <span>
                      <span className="description-decision-tree-simulator-is-a-web-application-built-with-django-that-allows-you-to-predict-data-using-machine-learning-models-main-skills-html-css-java-script-python-django-postgre-sql-span">
                        Description
                      </span>
                      <span className="description-decision-tree-simulator-is-a-web-application-built-with-django-that-allows-you-to-predict-data-using-machine-learning-models-main-skills-html-css-java-script-python-django-postgre-sql-span2">
                         : Decision Tree Simulator is a web application built
                        with Django that allows you to predict data using
                        machine learning models. <br />
                        <br />
                      </span>
                      <span className="description-decision-tree-simulator-is-a-web-application-built-with-django-that-allows-you-to-predict-data-using-machine-learning-models-main-skills-html-css-java-script-python-django-postgre-sql-span">
                        Main Skills:
                      </span>
                      <span className="description-decision-tree-simulator-is-a-web-application-built-with-django-that-allows-you-to-predict-data-using-machine-learning-models-main-skills-html-css-java-script-python-django-postgre-sql-span2">
                        HTML, CSS, JavaScript, Python, Django, PostgreSQL.
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="content6">
              <img className="image" src="image0.png" />
              <div className="content">
                <div className="name-arcade-game-lobo-cabra-y-col-5-desaf-os">
                  <span>
                    <span className="name-arcade-game-lobo-cabra-y-col-5-desaf-os-span">
                      Name:
                    </span>
                    <span className="name-arcade-game-lobo-cabra-y-col-5-desaf-os-span2">
                      Arcade Game: Lobo, Cabra y Col: 5 Desafíos
                    </span>
                  </span>{" "}
                </div>
                <div className="description-the-main-objective-was-to-meet-a-series-of-functional-non-functional-requirements-and-perform-different-testing-techniques-main-skills-node-js-express-js-mongo-db-loadster-y-google-lighthouse">
                  <span>
                    <span className="description-the-main-objective-was-to-meet-a-series-of-functional-non-functional-requirements-and-perform-different-testing-techniques-main-skills-node-js-express-js-mongo-db-loadster-y-google-lighthouse-span">
                      Description
                    </span>
                    <span className="description-the-main-objective-was-to-meet-a-series-of-functional-non-functional-requirements-and-perform-different-testing-techniques-main-skills-node-js-express-js-mongo-db-loadster-y-google-lighthouse-span2">
                       : The main objective was to meet a series of functional,
                      non-functional requirements and perform different testing
                      techniques.
                      <br />
                    </span>
                    <span className="description-the-main-objective-was-to-meet-a-series-of-functional-non-functional-requirements-and-perform-different-testing-techniques-main-skills-node-js-express-js-mongo-db-loadster-y-google-lighthouse-span">
                      <br />
                      Main Skills:
                    </span>
                    <span className="description-the-main-objective-was-to-meet-a-series-of-functional-non-functional-requirements-and-perform-different-testing-techniques-main-skills-node-js-express-js-mongo-db-loadster-y-google-lighthouse-span2">
                      Node.js, Express.js, MongoDB, Loadster y Google
                      Lighthouse.
                    </span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="content7">
              <img className="image" src="image1.png" />
              <div className="section-title2">
                <div className="content">
                  <div className="name-astro-place-mock-e-commerce">
                    <span>
                      <span className="name-astro-place-mock-e-commerce-span">
                        Name:
                      </span>
                      <span className="name-astro-place-mock-e-commerce-span2">
                        Astro Place: mock e-commerce
                      </span>
                    </span>{" "}
                  </div>
                  <div className="description-project-of-the-react-js-con-vite-js-y-tailwind-css-course-from-platzi-the-goal-was-to-put-into-practice-web-development-skills-main-skills-react-js-vite-js-tailwind-css-deployment-netlify">
                    <span>
                      <span className="description-project-of-the-react-js-con-vite-js-y-tailwind-css-course-from-platzi-the-goal-was-to-put-into-practice-web-development-skills-main-skills-react-js-vite-js-tailwind-css-deployment-netlify-span">
                        Description
                      </span>
                      <span className="description-project-of-the-react-js-con-vite-js-y-tailwind-css-course-from-platzi-the-goal-was-to-put-into-practice-web-development-skills-main-skills-react-js-vite-js-tailwind-css-deployment-netlify-span2">
                         : Project of the &quot;React.js con Vite.js y Tailwind
                        CSS&quot; course from Platzi. The goal was to put into
                        practice web development skills.
                        <br />
                        <br />
                      </span>
                      <span className="description-project-of-the-react-js-con-vite-js-y-tailwind-css-course-from-platzi-the-goal-was-to-put-into-practice-web-development-skills-main-skills-react-js-vite-js-tailwind-css-deployment-netlify-span">
                        Main Skills:
                      </span>
                      <span className="description-project-of-the-react-js-con-vite-js-y-tailwind-css-course-from-platzi-the-goal-was-to-put-into-practice-web-development-skills-main-skills-react-js-vite-js-tailwind-css-deployment-netlify-span2">
                        React.js, Vite.js, TailwindCSS, Deployment: Netlify.
                      </span>
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="content6">
              <img className="image" src="image2.png" />
              <div className="content">
                <div className="name-astro-place-express-backend-with-postgre-sql">
                  <span>
                    <span className="name-astro-place-express-backend-with-postgre-sql-span">
                      Name:
                    </span>
                    <span className="name-astro-place-express-backend-with-postgre-sql-span2">
                      Astro Place: Express Backend
                    </span>
                    <span className="name-astro-place-express-backend-with-postgre-sql-span">
                      with PostgreSQL
                    </span>
                  </span>{" "}
                </div>
                <div className="description-this-project-showcases-essential-backend-practices-including-orm-for-postgre-sql-security-with-passport-js-jwt-and-more-main-skills-node-js-express-js-postgre-sql-passport-js-jwt-nodemailer">
                  <span>
                    <span className="description-this-project-showcases-essential-backend-practices-including-orm-for-postgre-sql-security-with-passport-js-jwt-and-more-main-skills-node-js-express-js-postgre-sql-passport-js-jwt-nodemailer-span">
                      Description 
                    </span>
                    <span className="description-this-project-showcases-essential-backend-practices-including-orm-for-postgre-sql-security-with-passport-js-jwt-and-more-main-skills-node-js-express-js-postgre-sql-passport-js-jwt-nodemailer-span2">
                      : This project showcases essential backend practices,
                      including ORM for PostgreSQL, Security with Passport.js,
                      JWT and more.
                      <br />
                    </span>
                    <span className="description-this-project-showcases-essential-backend-practices-including-orm-for-postgre-sql-security-with-passport-js-jwt-and-more-main-skills-node-js-express-js-postgre-sql-passport-js-jwt-nodemailer-span">
                      <br />
                      Main Skills:
                    </span>
                    <span className="description-this-project-showcases-essential-backend-practices-including-orm-for-postgre-sql-security-with-passport-js-jwt-and-more-main-skills-node-js-express-js-postgre-sql-passport-js-jwt-nodemailer-span2">
                      Node.js, Express.js, PostgreSQL, Passport.js, JWT,
                      Nodemailer.
                    </span>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
