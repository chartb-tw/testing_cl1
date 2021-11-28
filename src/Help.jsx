import React from "react";

export default Help = () => {
  return (
    <div>
      <>
        <h3>Help page</h3>
        <body>
          <p>
            Nah, you don't need it,{" "}
            <a href="https://a.com">just have some Red Bull™.</a>
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lk2iP99v8ho"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </body>
      </>
    </div>
  );
};
