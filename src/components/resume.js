import React from "react";

export const Resume = ({ privacy_policies, skills }) => (
  <section id="privacy-policy">
    <div className="row work">
      <div className="three columns header-col">
        <h1>
          <span>Privacy Policy</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {privacy_policies.map((policy, index) => {
          return (
            <div key={policy.company + index}>
              <h3>{policy.company}</h3>
              {policy.description.map((des, key) => (
                <p key={`${key}-policy-list`}>{des}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>

    <div className="row skill">
      <div className="three columns header-col">
        <h1>
          <span>Terms &amp; Conditions</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        {skills.map((work, index) => {
          return (
            <div key={work.company + index}>
              <h3>{work.company}</h3>
              {work.description.map((des, key) => (
                <p key={`${key}-terms-and-condition-${index}`}>{des}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
