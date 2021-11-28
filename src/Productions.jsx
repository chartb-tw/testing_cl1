import React from "react";

import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";
export default Productions = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <>
        <h3>Productions Page</h3>
        <body>
          <p>
            Duis ultricies mi non arcu laoreet, ultrices lobortis nisi dictum.
            Suspendisse efficitur orci vitae sapien euismod semper. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nam suscipit orci
            vitae lorem rhoncus vulputate. Quisque consectetur nunc nulla, eget
            molestie velit tempor sed. Proin eget congue dolor, quis dignissim
            sapien. Cras tellus purus, vehicula nec elit et, placerat facilisis
            lacus. Praesent eget sollicitudin diam. Ut ultrices, ipsum eget
            hendrerit suscipit, sapien mauris ornare turpis, quis molestie dui
            lorem sed metus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Mauris at ipsum dolor.
            Vivamus quis suscipit <a href="https://a.com">ligma.</a>
          </p>
        </body>
      </>
    </div>
  );
};
