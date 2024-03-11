import React from "react";
import "../components/Gallery.css"; // Make sure the path to your CSS file is correct

const Gallery = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {/* The title in an <h1> tag with the class "gallery-title" */}
        <h1 className="gallery-title">GALLERY</h1>

        {/* Include the introduction paragraph if you want it */}
        <p className="gallery-intro">
          Explore the visual journey of AKPsi OT through our Instagram feed.
        </p>

        {/* The Instagram section remains unchanged */}
        <div className="instagram-section">
          <iframe
            src="//lightwidget.com/widgets/143bc4bf938d5d478ba2c2d547050754.html"
            scrolling="yes"
            allowtransparency="true"
            style={{
              width: "80%", // Adjust the width as needed
              border: 0,
              overflow: "hidden",
              minHeight: "500px", // Adjust the height as needed
              paddingTop: "15px",
            }}
            title="Instagram Feed"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
