import React from "react";
import "../css/ComplaintCard.css";

const ComplaintCard = ({
  complaintImage,
  complaintsCount = 0,
  complaintFooter,
  cardColor,
}) => {
  return (
    <>
      <div className={`card-container ${cardColor}`}>
        <div className="image-and-count">
          <div className="image-container">
            <img
              src={complaintImage}
              alt="complaint-image"
              id="complaint-logo"
            />
          </div>
          <div className="complaints-count">{complaintsCount}</div>
        </div>
        <div className="card-footer">{complaintFooter}</div>
      </div>
    </>
  );
};

export default ComplaintCard;
