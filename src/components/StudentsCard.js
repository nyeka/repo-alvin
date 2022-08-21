import React from "react";

export default function StudentsCard({ name, birth, imageUrl, instagramUrl }) {
  return (
    <div className="students-card">
      <div className="students-image-box">
        <img src={imageUrl} alt={name}></img>
      </div>
      <div className="students-content-box">
        <div className="students-content-text">
          <h3>{name}</h3>
        </div>
        <ul className="students-sci">
          <p>{birth}</p>
          <a href={instagramUrl}>
            <i class="bx bxl-instagram"></i>
          </a>
        </ul>
      </div>
    </div>
  );
}
