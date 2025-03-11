import React from "react";
import GraphPropertyUpdate from "../../asserts/Summaries/GraphPropertyUpdate.png";
import Goal_1 from "../../asserts/Contributions/Goal-1.png";
import Goal_2_1 from "../../asserts/Contributions/Goal-2.1.png";
import Goal_2_2 from "../../asserts/Contributions/Goal-2.2.png";
import MainHeading from "../MainHeading/MainHeading";
import "./Summaries.css";
const Summaries = () => {
  return (
    <div className="home-container">
      <MainHeading headingText="Project Summaries" />
      <div className="sections">
        <h2 className="section-heading">
          A Framework for Graph Property Update
        </h2>
        <p>
          How can graph properties be updated without complete re-computation?
        </p>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <img
              src={GraphPropertyUpdate}
              alt={GraphPropertyUpdate}
              className="section-content-image"
            />
            <div className="section-content-text">
              <ul class="GraphPropertyUpdateUl">
                <li>
                  Our framework updates graph properties using the information
                  from last time step.
                </li>
                <li>
                  Step 1: Process the Changed Edges. Find affected subgraphs
                </li>
                <li>
                  Step 2: Update Properties of affected subgraphs. Iteratively
                  update affected nodes
                </li>
                <li>
                  The framework provides a generic, compute architecture
                  agnostic approach.
                </li>
                <li>It avoids total recomputation.</li>
                <li>
                  It limits its computation only inside the affected subgraphs.
                </li>
                <li>
                  It decreases execution time, avoids the wastage of compute
                  resources.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="sections">
        <h2 className="section-heading">
          Goal 1: Utilization of Prior Knowledge to Avoid Redundant Computation
        </h2>
        <div>
          <img
            src={Goal_1}
            alt={Goal_1}
            className="section-content-image_Goal1"
          />
          <div className="section-content-text">
            <ul class="ul-list">
              <li>Vertex Color Update</li>
              <li>
                Our algorithm maintains proper coloring with (𝑑_max + 1) upper
                bound.
              </li>
              <li>
                Our algorithm maintains proper coloring with (𝑑_max + 1) upper
                bound.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="section-heading">
          Goal 2: Use of Local Information to Improve Efficiency
        </h2>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <img
              src={Goal_2_1}
              alt={Goal_2_1}
              className="section-content-image_Goal2"
            />
            <div className="section-content-text">
              <ul class="ul-list">
                <li>
                  We proposed a unique priority assignment for distributed
                  coloring that reduces inter-partition communication
                </li>
                <li>
                  Our approach to reduce communication:
                  <ul>
                    <li>Storing 2-hop ghost</li>
                    <li>Deterministic coloring for priority 2 vertices</li>
                    <li>Minimized color update for priority 3 vertices</li>
                    <li>
                      Use minimum information (Global ID and priority) to select
                      vertices for recoloring
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <div className="section-content-text">
              <ul class="GraphPropertyUpdateUl">
                <li>
                  Structural Hole Spanner (SHS) serves as a bridge between two
                  or more otherwise disconnected community.
                </li>
                <li>
                  SHS detection algorithms depend on [10]:
                  <ul>
                    <li>
                      Impact on the information flow due to removal of a vertex.
                    </li>
                    <li>Centrality metrices.</li>
                  </ul>
                </li>
                <li>
                  We propose mSpan, a Structural Hole Spanner (SHS) detection
                  technique based on only local neighborhood information [11].
                </li>
                <li>We exploit the concept of strong and weak social ties.</li>
              </ul>
            </div>
            <img
              src={Goal_2_2}
              alt={Goal_2_2}
              className="section-content-image_Goal2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Summaries;
