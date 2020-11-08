import prepareTreemapData from "./prepareTreemapData";
import updateData from "../../chart/plotly/updateData";

export default function prepareData(seriesList, options) {
  return updateData(prepareTreemapData(seriesList, options), options);
}

