import * as d3scale from "d3-scale-chromatic";

export const scales = {
  BrBG: d3scale.interpolateBrBG,
  PRGn: d3scale.interpolatePRGn,
  PiYG: d3scale.interpolatePiYG,
  PuOr: d3scale.interpolatePuOr,
  RdBu: d3scale.interpolateRdBu,
  RdGy: d3scale.interpolateRdGy,
  RdYlBu: d3scale.interpolateRdYlBu,
  RdYlGn: d3scale.interpolateRdYlGn,
  Spectral: d3scale.interpolateSpectral,
  BuGn: d3scale.interpolateBuGn,
  BuPu: d3scale.interpolateBuPu,
  GnBu: d3scale.interpolateGnBu,
  OrRd: d3scale.interpolateOrRd,
  PuBuGn: d3scale.interpolatePuBuGn,
  PuBu: d3scale.interpolatePuBu,
  PuRd: d3scale.interpolatePuRd,
  RdPu: d3scale.interpolateRdPu,
  YlGnBu: d3scale.interpolateYlGnBu,
  YlGn: d3scale.interpolateYlGn,
  YlOrBr: d3scale.interpolateYlOrBr,
  YlOrRd: d3scale.interpolateYlOrRd,
  Blues: d3scale.interpolateBlues,
  Greens: d3scale.interpolateGreens,
  Greys: d3scale.interpolateGreys,
  Purples: d3scale.interpolatePurples,
  Reds: d3scale.interpolateReds,
  Oranges: d3scale.interpolateOranges,
  Cividis: d3scale.interpolateCividis,
  CubehelixDefault: d3scale.interpolateCubehelixDefault,
  Rainbow: d3scale.interpolateRainbow,
  Warm: d3scale.interpolateWarm,
  Cool: d3scale.interpolateCool,
  Sinebow: d3scale.interpolateSinebow,
  Turbo: d3scale.interpolateTurbo,
  Viridis: d3scale.interpolateViridis,
  Magma: d3scale.interpolateMagma,
  Inferno: d3scale.interpolateInferno,
  Plasma: d3scale.interpolatePlasma,
  "Custom...": null,
};

export function scaleGen(scaleName, options) {
  /* Generates scale function callable from tableColorScaleGenerator. */
  if (scaleName == null) {
    return undefined;
  }

  const scaleFn = (scaleName == "Custom...") ? d3.interpolateRgb(options.pivotMinColor, options.pivotMaxColor) : scales[scaleName];
  const lightenAmount = 0.5;

  function lighten(color, amount) {
    const r = d3.rgb(color).r;
    const g = d3.rgb(color).g;
    const b = d3.rgb(color).b;
    const newColor = d3.rgb(r + (255 - r) * amount, g + (255 - g) * amount, b + (255 - b) * amount);
    return newColor.toString();
  }

  return function (values) {
    const min = Math.min.apply(Math, values);
    const max = Math.max.apply(Math, values);
    const range = max - min;
    return (x) => {
      const progress = (max - x) / range;
      const backgroundColor = lighten(scaleFn(1 - progress), lightenAmount);
      return { backgroundColor };
    };
  };
}
