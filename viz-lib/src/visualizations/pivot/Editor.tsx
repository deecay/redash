import { merge, map } from "lodash";
import React from "react";
import { Section, Switch, Select, ColorPicker } from "@/components/visualizations/editor";
import { EditorPropTypes } from "@/visualizations/prop-types";
import ColorPalette from "@/visualizations/ColorPalette";
import { scales, scaleGen } from "./utils";

export default function Editor({ options, onOptionsChange }: any) {
  const updateOptions = (updates: any) => {
    onOptionsChange(merge({}, options, updates));
  };

  return (
    <React.Fragment>
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          data-test="PivotEditor.HideControls"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          id="pivot-show-controls"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
          defaultChecked={!options.controls.enabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(enabled: any) => void' is not assignable to... Remove this comment to see the full error message
          onChange={(enabled: any) => updateOptions({ controls: { enabled: !enabled } })}>
          Show Pivot Controls
        </Switch>
      </Section>
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          id="pivot-show-row-totals"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          defaultChecked={options.rendererOptions.table.rowTotals}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(rowTotals: any) => void' is not assignable ... Remove this comment to see the full error message
          onChange={(rowTotals: any) => updateOptions({ rendererOptions: { table: { rowTotals } } })}>
          Show Row Totals
        </Switch>
      </Section>
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          id="pivot-show-column-totals"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          defaultChecked={options.rendererOptions.table.colTotals}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(colTotals: any) => void' is not assignable ... Remove this comment to see the full error message
          onChange={(colTotals: any) => updateOptions({ rendererOptions: { table: { colTotals } } })}>
          Show Column Totals
        </Switch>
      </Section>
      <Section>
        <Select
          label="Color Scheme"
          disabled={!options.rendererName || !options.rendererName.endsWith("Heatmap")}
          data-test="Chart.Colors.Pivot.ColorScheme"
          placeholder="Choose Color Scheme..."
          allowClear
          value={options.colorScheme || undefined}
          onChange={(value: any) => updateOptions({ colorScheme: value || null, tableColorScaleGenerator: scaleGen(value, options) || null })}>
          {map(Object.keys(scales), (scheme) => (
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message
            <Select.Option key={scheme} value={scheme} data-test={`Chart.Colors.PivotColorScheme.${scheme}`}>
              {scheme}
              {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
            </Select.Option>
          ))}
        </Select>
      </Section>

      {options.colorScheme === "Custom..." && (
        <React.Fragment>
          {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
          <Section>
            <ColorPicker
              layout="horizontal"
              label="Min Color:"
              data-test="Chart.Colors.Pivot.MinColor"
              interactive
              placement="topLeft"
              presetColors={ColorPalette}
              color={options.pivotMinColor}
              onChange={(pivotMinColor: any) => updateOptions({ pivotMinColor: pivotMinColor || null, tableColorScaleGenerator: scaleGen("Custom...", options) || null })}
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'Label' does not exist on type '({ classN... Remove this comment to see the full error message
              addonAfter={<ColorPicker.Label color={options.pivotMinColor} presetColors={ColorPalette} />}
            />
          </Section>
          {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
          <Section>
            <ColorPicker
              layout="horizontal"
              label="Max Color:"
              data-test="Chart.Colors.Pivot.MaxColor"
              interactive
              placement="topRight"
              presetColors={ColorPalette}
              color={options.pivotMaxColor}
              onChange={(pivotMaxColor: any) => updateOptions({ pivotMaxColor: pivotMaxColor || null, tableColorScaleGenerator: scaleGen("Custom...", options) || null })}
              // @ts-expect-error ts-migrate(2339) FIXME: Property 'Label' does not exist on type '({ classN... Remove this comment to see the full error message
              addonAfter={<ColorPicker.Label color={options.pivotMaxColor} presetColors={ColorPalette} />}
            />
          </Section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Editor.propTypes = EditorPropTypes;
