import React from "react";

const WhoWeAreTen = ({ data }) => (
  <section className="white-bg pb-70">
    <div className="container">
      <div className="row">
        {data.map((service) => (
          <div
            className="col-md-4 feature-box text-left mb-50 col-sm-6"
            key={service.id}
          >
            <div className="pull-left">
              <i className={`${service.icon} font-40px indigo-icon`}></i>
            </div>
            <div className="pull-right">
              <h4 className="mt-0 font-600">{service.title}</h4>
              <p className="font-400">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreTen;
