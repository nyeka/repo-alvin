import React from "react";
import StudentsCard from "./StudentsCard";

export default function Class({ students, currentClass, classPhoto }) {
  return (
    <>
      <div className="class-card">
        <div className="class-card-photo">
          {classPhoto
            .filter((photo) => photo.class === currentClass)
            .map((photo) => (
              <img
                key={photo.id}
                src={photo.imageUrl}
                alt={`class of ${currentClass}`}
              ></img>
            ))}
        </div>
        <div className="class-card-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="students-card-section">
        <div className="students-card-container">
          {students
            .filter((student) => student.class === currentClass)
            .map((student) => (
              <StudentsCard
                key={student.id}
                name={student.name}
                birth={student.birth}
                imageUrl={student.imageUrl}
                instagramUrl={student.instagramUrl}
              />
            ))}
        </div>
      </div>
    </>
  );
}
