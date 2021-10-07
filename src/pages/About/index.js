import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="container-style">
      <h1 className="about-subtitle">About me</h1>
      <div className="d-flex flex-row">
        <img
          src={coverImage}
          className="profile-img-style"
          style={{ width: "20%" }}
          alt="cover"
        />

        <p className="para-style">
          A highly motivated and bilingual professional entering a second career
          in Web Development and looking for an opportunity in the Ottawa tech
          market. In my last career in Mining Engineering, I specialized in
          underground ventilation and excelled in all my roles in a ten year
          period from field technician, to short/long term planning and designs,
          to project management and as a college professor. With a diploma from
          the Coding (Full-Stack Web Development) Bootcamp at Carleton
          University, my newly developed skills in JavaScript, CSS, the MERN
          Stack and an abundance of soft and hard skills polished from a decade
          long engineering career, I would be a valuable asset to any company
          willing to give me chance.
        </p>
      </div>
    </section>
  );
}

export default About;
