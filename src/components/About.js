import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a fourth year <b>Forensic IT </b> student at
        <a href="https://www.hsleiden.nl/over-hl?gclid=Cj0KCQjwrs2XBhDjARIsAHVymmRnASFB2Iy7WRPibGzAI8H4Sw8vF-bnsAX1PK-ydhv_aK8y2fS7OZ8aAlaJEALw_wcB">
          {" "}
          Hogeschool of Leiden
        </a>
        . After graduation, I am planning on starting a master at the university of Utrecht{" "}

      </p>
    );
    const two = (
      <p>
        Outside of work, I have the best fun in Leiden, where you can always find me outdoors or in my student home with 12 roommates.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:bob_hes@hotmail.com">
          bob_hes@hotmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "Machine learning",
      "Algoritms",
      "Threat Intelligence",
      "Mitre Att&ck",
      "Scripting"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
