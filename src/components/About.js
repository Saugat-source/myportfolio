import React from "react";
import g6 from "../g6.jpeg";
import g7 from "../g7.jpeg";
import g8 from "../g8.jpeg";
function About() {
  return (
    <>
      <h1 className="aboutFirstText">About RRMS</h1>
      <div className="aboutMainDiv">
        <div className="aboutImage">
          <div className="aboutGroupImage">
            <img src={g6} alt="student" />
          </div>
        </div>
        <div className="aboutText">
          <h3 className="aboutSecondText">
            Since its founding in 2051, RRMS has been dedicated to expanding and
            sharing knowledge, inspiring innovation, and preserving cultural and
            scientific information for future generations.
          </h3>
        </div>
      </div>
      <div className="introduction">
        <h1>Introduction</h1>
        <h3>
          It is the aim of Rupratna School to provide education that every
          student deserves. We, at Samriddhi School, appreciate diversity and
          realize that each student is different and should be treated as a
          unique individual. Our constant endeavor is to help each student
          realize his/her full potential and discover new horizons in learning.
        </h3>
      </div>

      <div className="ourVision">
        <h1>Our vision</h1>
        <h3>
          We envision RUPRATNA School as a dynamic and inspiring educational
          institution that sets an example for the student community. We are
          committed to providing an outstanding learning environment to our
          students, to enable them to excel and thrive in a complex, constantly
          changing world, getting more interconnected by the day.
        </h3>
      </div>

      <div className="ourMission">
        <h1>our mission</h1>
        <h3>
          The mission of RUPRATNA School is to produce lifelong learners with a
          value system that turns them into good human beings. Honesty,
          integrity, and sincerity are values that form the strong foundation on
          which we build an educational offerings, culminating in academic and
          personal success of our students. To this end, we make use of the best
          educational practices, pedagogical excellence and a rich curriculum.
          Our sustained pursuit for educational excellence is premised around a
          model of engagement with the all the elements of a vibrant learning
          ecosystem comprising of students, parents, families, business houses,
          civic organizations, higher education institutions and the community
          at large.
        </h3>
      </div>
      <div className="aboutFounderBgColor">
        <p className="teams"> OUR TEAMS</p>
        <h1 className="aboutFounderFirstText">Managing Director</h1>

        <div className="aboutFounder">
          <div className="aboutFounderText">
            <h3>
              Myself,Prabhu Kumar Shrestha, And I am the Managing Director of
              RRMS.
            </h3>
            <h3>
              Yes, I know too well, it can be tough being a school leader. Your
              job is incredibly significant, leading and managing change in
              schools. We ask ourselves, what makes a good school leader? If
              your actions inspire others to dream more, learn more, do more and
              become more, you are a leader.Keep motivating yourself.
            </h3>
          </div>
          <div className="aboutFounderImageController">
            <div className="aboutFounderImage">
              <img src={g7} alt="principal" />
            </div>
          </div>
        </div>
      </div>

      <div className="aboutTeacher">
        <h1>TEACHING STAFF</h1>
        <h3>
          What makes RUPRATNA School different from the rest is its unique blend
          of team work of national and international professionals. Team
          RUPRATNA consists of passionate, committed and experienced
          professionals from diverse field, making RUPRATNA School a truly
          outstanding center of excellence. This school is a common vision of
          these professionals working together to achieve the common goal of
          transforming students into 21st century global citizens.
        </h3>
        <div className="teacherPhoto">
          <div className="teacher">
            <img src={g8} alt="teacher" />
          </div>
        </div>
      </div>
      <h6 className="aboutFooter">
        &#169;RupRatna Memorial School,Arjundhara-7,Shanishare,Nepal,Jhapa
      </h6>
    </>
  );
}

export default About;
