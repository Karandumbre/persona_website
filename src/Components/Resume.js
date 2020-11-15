import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var work = this.props.data.privacy_policies.map(function (policy) {
        return (
          <div key={policy.company}>
            <h3>{policy.company}</h3>
            {Array.isArray(policy.description) &&
              policy.description.map((des, key) => (
                <p key={`${key}-policy-list`}>{des}</p>
              ))}
          </div>
        );
      });

      var skills = this.props.data.skills.map((work) => {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            {Array.isArray(work.description) &&
              work.description.map((des, key) => (
                <p key={`${key}-terms-and-condition`}>{des}</p>
              ))}
          </div>
        );
      });
    }

    return (
      <section id="privacy-policy">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Privacy Policy</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Terms &amp; Conditions</span>
            </h1>
          </div>

          <div className="nine columns main-col">{skills}</div>
        </div>
      </section>
    );
  }
}

export default Resume;
