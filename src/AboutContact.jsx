import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
export default AboutContact = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <>
        <h3>About and Contact Page</h3>
        <p>Bollocks</p>
      </>
    </div>
  );
};
