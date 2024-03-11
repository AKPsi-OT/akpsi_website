import React from "react";
import "../components/Gallery.css"; // Ensure this path matches your project structure

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">GALLERY</h1>
        <p className="gallery-intro">
          Explore the visual journey of AKPsi OT through our Instagram feed.
        </p>
        <div className="instagram-section">
          <iframe
            src="//lightwidget.com/widgets/f9a1e1ce8b715940b8f153f39f35ce52.html"
            scrolling="yes"
            allowtransparency="true"
            style={{
              width: "60%", // Adjust the width as needed
              border: 0,
              overflow: "hidden",
              minHeight: "500px", // Adjust the height as needed
              paddingTop: "15px",
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
