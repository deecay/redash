import { merge } from "lodash";

import Renderer from "./Renderer";
import Editor from "./Editor";

const DEFAULT_OPTIONS = {
  controls: {
    enabled: false, // `false` means "show controls" o_O
  },
  rendererOptions: {
    table: {
      colTotals: true,
      rowTotals: true,
    },
  },
  pivotMinColor: "#FFFFFF",
  pivotMaxColor: "#FFFFFF",
};

export default {
  type: "PIVOT",
  name: "Pivot Table",
  getOptions: (options: any) => merge({}, DEFAULT_OPTIONS, options),
  Renderer,
  Editor,

  defaultRows: 10,
  defaultColumns: 3,
  minColumns: 2,
};
