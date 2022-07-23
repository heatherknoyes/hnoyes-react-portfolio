import React from "react";
import "../../styles/AboutMe.css";
import heather from "../../images/HNoyesPhoto.jpg";

function AboutMe() {
  return (
    // <section>
    //   <p>Hello world</p>
    // </section>
    <section id="nav-about-me" className="about-me row">
      <div className="about-me-content d-flex flex-wrap">
        <div className="col-12 col-md-6 col-lg-4 my-5 d-flex justify-content-center">
          <img src={heather} className="img-fluid" alt="Heather Noyes" />
        </div>
        <div className="col-12 col-md-6 col-lg-8 d-flex align-items-center">
          <p>
            My name is Heather Noyes and I currently work at Ware2Go as a
            Backend Software Engineer. I graduated from the Georgia Institute of
            Technology with a Bachelors of Science in Biomedical Engineering.
            After working in the medical field professionally after I graduated
            I determined it wasn't the career I wanted. About four years ago I
            put in the work to change my career and became a Software Developer
            using the skills that I learned from my Computer Science minor at
            Georgia Tech.
            <br />
            <br />
            Outside of work I have enrolled in a coding bootcamp that has
            enabled me to learn new technologies and practice those skills to
            create this portfolio. For hobbies I love to knit, cook, bake bread,
            and host events for my friends and family. I recently moved back to
            the Atlanta area from Sarasota, Florida and am enjoying the cooler
            weather with some Appalachian trail hiking.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
