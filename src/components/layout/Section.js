import React from "react";

function Section(props) {
  const { image, heading, content, id } = props;
  console.log(image);
  return (
    <div>
      <div className="section" id={id}>
        <div className="features">
          <div className="">
            <h1 className="features-heading text-center">{heading}</h1>
            <div className="info-content">
              <p className="p-2 ">
                {content}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
          </div>
          <div className="p-3 d-flex justify-content-center see">
            <img
              src={image}
              className="img-fluid sec-image"
              alt="illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
