import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [loginStatusMessage, setLoginStatusMessage] = useState(
    "Checking Facebook login status..."
  );

  useEffect(() => {
    function statusChangeCallback(response) {
      if (response.status === "connected") {
        setLoginStatusMessage("You are logged into Facebook.");
      } else if (response.status === "not_authorized") {
        setLoginStatusMessage(
          "You are logged into Facebook, but have not authorized the app."
        );
      } else {
        setLoginStatusMessage("You are not logged into Facebook.");
      }
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "748944197199516", // Use your actual Facebook App ID
        cookie: true,
        xfbml: true,
        version: "v12.0", // Use the actual API version
      });

      window.FB.AppEvents.logPageView();

      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          window.FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
            setLoginStatusMessage(`Logged in as ${response.name}`);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile" }
    ); // Specify the permissions your app needs
  };

  return (
    <div>
      <h1>Gallery</h1>
      <p>This is the Gallery Page.</p>
      <p>{loginStatusMessage}</p>
      <button onClick={handleLogin}>Log in with Facebook</button>
    </div>
  );
};

export default Gallery;
