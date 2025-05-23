import React from "react";
import publications from "../../data/publicationsData";
import MainHeading from "../MainHeading/MainHeading";
import "./Publications.css";

const Publications = () => {
  return (
    <div className="publications-container">
      <MainHeading headingText="Publications" />
      <ul className="publications-list">
        {publications.map((publication, index) => (
          <li key={index} className="publication-item">
            <p>
              {publication.authors && <strong>{publication.authors}</strong>}
              {publication.title && `${publication.title}`}
              {publication.journal && (
                <>
                  , <em>{publication.journal}</em>
                </>
              )}
              {publication.volume && `, ${publication.volume}`}
              {publication.pages && `, pp. ${publication.pages}`}
              {publication.date && `, ${publication.date}`}
              {publication.doi && (
                <>
                  , doi:{" "}
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.doi}
                  </a>
                </>
              )}
              {publication.paperLink && (
                <>
                  , {" "}
                  <a
                    href={publication.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Research Paper
                  </a>
                </>
              )}
              {publication.codeLink && (
                <>
                  ,{" "}
                  <a
                    href={publication.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </>
              )}
            </p>
            <hr className="publication-divider" /> {/* Line division */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
