import { each, map, includes } from "lodash";
import { cleanNumber, normalizeValue } from "../../chart/plotly/utils";

function getHoverInfoPattern(options) {
  const hasX = /{{\s*@@x\s*}}/.test(options.textFormat);
  const hasName = /{{\s*@@name\s*}}/.test(options.textFormat);
  let result = "text";
  if (!hasX) result += "+x";
  if (!hasName) result += "+name";
  return result;
}

function prepareSeries(series, options, additionalOptions) {
  const data = series.data;

  const sourceData = new Map();
  const xValues = [];
  const yValues = [];
  const sizeValues = [];
  each(data, row => {
    const x = normalizeValue(row.x, "category"); // number/datetime/category
    const y = normalizeValue(row.y, "category"); // depends on series type!
    const size = cleanNumber(row.size); // always number
    sourceData.set(x, {
      x,
      y,
      size,
      yPercent: null, // will be updated later
      row,
    });
    xValues.push(x);
    yValues.push(y);
    sizeValues.push(size);
  });

  const plotlySeries = {
    visible: true,
    type: "treemap",
    x: xValues,
    y: yValues,
    labels: xValues,
    parents: yValues,
    textinfo: "label",
    hoverinfo: "label+current path+percent root+percent parent",
    pathbar: { visible: false },
    name: series.name,
    marker: { colorscale: options.colorScheme },
    sourceData,
  };

  if (includes(options.columnMapping, "size")) {
    plotlySeries.values = sizeValues;
    plotlySeries.hoverinfo = "label+value+current path+percent root+percent parent";
  }

  additionalOptions = { ...additionalOptions, data };

  return plotlySeries;
}

export default function prepareTreemapData(seriesList, options) {
  const additionalOptions = {
    hoverInfoPattern: getHoverInfoPattern(options),
  };

  return map(seriesList, (series, index) => prepareSeries(series, options, { ...additionalOptions, index }));
}
