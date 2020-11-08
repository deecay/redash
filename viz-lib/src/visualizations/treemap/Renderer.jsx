import { includes } from "lodash";
import React from "react";
import { RendererPropTypes } from "@/visualizations";

import PlotlyChart from "./PlotlyChart";

export default function Renderer({ options, ...props }) {
  if (!includes(options.columnMapping, "x") || !includes(options.columnMapping, "y")) {
    return null;
  }

  return <PlotlyChart options={options} {...props} />;
}

Renderer.propTypes = RendererPropTypes;
