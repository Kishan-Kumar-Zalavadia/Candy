import React from "react";
import IntellectualMerit from "../../asserts/IntellectualMerit.png";
import MainHeading from "../MainHeading/MainHeading";
import "./Home.css";
// import Carousel from "../Carousel/Carousel";

// const carouselItems = [
//   {
//     image: require("../../asserts/IntellectualMerit.png"),
//     title: "Slide 1",
//     description: "This is the description for Slide 1",
//   },
//   {
//     image: require("../../asserts/IntellectualMerit.png"),
//     title: "Slide 2",
//     description: "This is the description for Slide 2",
//   },
//   {
//     image: require("../../asserts/IntellectualMerit.png"),
//     title: "Slide 3",
//     description: "This is the description for Slide 3",
//   },
// ];
const Home = () => {
  return (
    <div className="home-container">
      <MainHeading headingText="Cyberinfrastructure for Accelerating Innovation in Network Dynamics" />
      {/* <Carousel items={carouselItems} /> */}
      <div className="sections">
        <section className="goals">
          <h2 className="section-heading">Goals</h2>
          <p>
            Design and develop a parallel, scalable, extendable, software
            platform, CANDY, for updating properties of dynamic networks.
            Provide functionality and tools to create new algorithms or modify
            existing ones, catering to users with varying expertise. Implement
            CANDY platform on distributed and shared memory systems, and GPUs,
            providing user-friendly interfaces.
          </p>
          <h3>
            Software Link: &nbsp;
            <a
              href="https://github.com/CANDYNSF/CANDYforAll"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>
          </h3>
        </section>

        <section className="challenges">
          <h2 className="section-heading">Challenges</h2>
          <ul>
            <li>
              Efficiently analyzing dynamic networks for real-life applications.
            </li>
            <li>
              Comprehensive cyberinfrastructure to support innovative research
              in large dynamic networks.
            </li>
            <li>
              Creating high-performance software with performance optimization.
            </li>
          </ul>
        </section>

        <h2 className="section-heading">Intellectual Merit</h2>
        <section className="intellectual-merit">
          <div className="intellectual-merit-content">
            <img
              src={IntellectualMerit}
              alt="Intellectual Merit"
              className="intellectual-merit-image"
            />
            <div className="intellectual-merit-text">
              <ul>
                <li>
                  Create a novel hierarchical taxonomy of network analysis
                  algorithms that allows for layered specification of parallel
                  algorithms based on multiple parameters.
                </li>
                <li>
                  Develop templates for creating new scalable, parallel
                  algorithms for dynamic network analysis.
                </li>
                <li>
                  Design algorithms to partition streaming sets of nodes and
                  edges into network snapshots at changing points.
                </li>
                <li>
                  Propose invariant-based quantifiable performance metrics for
                  analyzing large dynamic networks.
                </li>
                <li>
                  Evaluate CANDY software on genomic data, and cost-effective
                  operation of complex mining applications.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="broader-impacts">
          <h2 className="section-heading">Broader Impacts</h2>
          <ul>
            <li>
              Collaborate with multidisciplinary national/international research
              groups to evaluate the effectiveness of the developed platform,
              algorithms, and software tools.
            </li>
            <li>
              Host workshops, webinars, and tutorials to educate the research
              and broader community about CANDY.
            </li>
            <li>
              Disseminate project outcomes via a dedicated website, invited
              talks, demos, and high-quality publications.
            </li>
            <li>
              Train the next generation of data scientists to develop the CANDY
              platform; engage underrepresented minorities, women, and K-12
              students.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
