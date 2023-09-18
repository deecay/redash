import { isString, each, extend, includes, map, reduce, sortBy } from "lodash";
import { ColorPaletteArray } from "@/visualizations/ColorPalette";

import { cleanNumber, normalizeValue, getSeriesAxis } from "./utils";

export function getRadarDimensions(series: any) {
  const rows = series.length > 2 ? 2 : 1;
  const cellsInRow = Math.ceil(series.length / rows);
  const cellWidth = 1 / cellsInRow;
  const cellHeight = 1 / rows;
  const xPadding = 0.02;
  const yPadding = 0.1;

  return { rows, cellsInRow, cellWidth, cellHeight, xPadding, yPadding };
}

function prepareSeries(series: any, options: any, additionalOptions: any) {
  if (options.sortX) {
    if (options.reverseX) {
      series.data = sortBy(series.data, "x").reverse();
    } else {
      series.data = sortBy(series.data, "x");
    }
  }
  const x: any = [];
  const y: any = [];
  const sourceData = new Map();
  each(series.data, row => {
    const xValue = normalizeValue(row.x, options.xAxis.type); // number/datetime/category
    const yValue = cleanNumber(row.y);
    x.push(xValue);
    y.push(yValue);
    sourceData.set(xValue, {
      xValue,
      yValue,
      row,
    });
  });
  return {
    visible: true,
    name: series.name,
    theta: x.concat([x[0]]),
    r: y.concat([y[0]]),
    x, // for updateSeriesText()
    sourceData, // for updateSeriesText()
    type: "scatterpolar",
    fill: "toself",
    mode: "markers+lines" + (options.showDataLabels ? "+text" : ""),
    line: { color: ColorPaletteArray[additionalOptions.index] },
    connectgaps: "true",
    textposition: "top right",
    text: series.y,
    textfont: { color: ColorPaletteArray[additionalOptions.index] },
    thetaName: Object.keys(options.columnMapping).find(x => options.columnMapping[x].includes("x")),
    rName: Object.keys(options.columnMapping).find(x => options.columnMapping[x].includes("y")),
    hovertemplate: "%{data.rName}:%{r}<br>%{data.thetaName}:%{theta}",
    subplot: "polar" + (additionalOptions.index + 1),
    marker: [],
    error_y: [],
  };
}

export default function prepareRadarData(seriesList: any, options: any) {
  const additionalOptions = {
    ...getRadarDimensions(seriesList),
    hasX: includes(options.columnMapping, "x"),
  };

  return map(seriesList, (series, index) => prepareSeries(series, options, { ...additionalOptions, index }));
}
