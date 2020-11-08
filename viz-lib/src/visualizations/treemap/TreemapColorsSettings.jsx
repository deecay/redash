import { map } from "lodash";
import React from "react";
import { Section, Select } from "@/components/visualizations/editor";
import { EditorPropTypes } from "@/visualizations/prop-types";

const ColorSchemes = [
  "Blackbody",
  "Bluered",
  "Blues",
  "Earth",
  "Electric",
  "Greens",
  "Greys",
  "Hot",
  "Jet",
  "Picnic",
  "Portland",
  "Rainbow",
  "RdBu",
  "Reds",
  "Viridis",
  "YlGnBu",
  "YlOrRd",
];

export default function TreemapColorsSettings({ options, onOptionsChange }) {
  return (
    <React.Fragment>
      <Section>
        <Select
          label="Color Scheme"
          data-test="Chart.Colors.Treemap.ColorScheme"
          placeholder="Choose Color Scheme..."
          allowClear
          value={options.colorScheme || undefined}
          onChange={value => onOptionsChange({ colorScheme: value || null })}>
          {map(ColorSchemes, scheme => (
            <Select.Option key={scheme} value={scheme} data-test={`Chart.Colors.Treemap.ColorScheme.${scheme}`}>
              {scheme}
            </Select.Option>
          ))}
        </Select>
      </Section>
    </React.Fragment>
  );
}

TreemapColorsSettings.propTypes = EditorPropTypes;
