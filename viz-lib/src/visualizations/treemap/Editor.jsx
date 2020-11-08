/* eslint-disable react/prop-types */
import React from "react";
import createTabbedEditor from "@/components/visualizations/editor/createTabbedEditor";

import GeneralSettings from "./GeneralSettings";
import TreemapColorsSettings from "./TreemapColorsSettings";

export default createTabbedEditor([
  {
    key: "General",
    title: "General",
    component: props => (
      <React.Fragment>
        <GeneralSettings {...props} />
        <TreemapColorsSettings {...props} />
      </React.Fragment>
    ),
  },
]);
