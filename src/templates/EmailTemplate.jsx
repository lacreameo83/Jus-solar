import React from "react";

function EmailTemplate({ logo, location, address }) {
  return (
    <div className="flex items-center gap-5">
      <div>
        <div>{logo} </div>
      </div>
      <div className="hidden sm:block">
        <h2>{location}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default EmailTemplate;
