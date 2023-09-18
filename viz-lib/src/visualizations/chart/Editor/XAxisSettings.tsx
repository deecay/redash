import React from "react";
import { Section, Select, Switch, ContextHelp, Input } from "@/components/visualizations/editor";
import { EditorPropTypes } from "@/visualizations/prop-types";

import AxisSettings from "./AxisSettings";

export default function XAxisSettings({ options, onOptionsChange }: any) {
  return (
    <React.Fragment>
      <AxisSettings
        id="XAxis"
        features={{ autoDetectType: true }}
        options={options.xAxis}
        // @ts-expect-error ts-migrate(2322) FIXME: Type '(xAxis: any) => any' is not assignable to ty... Remove this comment to see the full error message
        onChange={(xAxis: any) => onOptionsChange({ xAxis })}
      />

      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          data-test="Chart.XAxis.Sort"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          defaultChecked={options.sortX}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(sortX: any) => any' is not assignable to ty... Remove this comment to see the full error message
          onChange={(sortX: any) => onOptionsChange({ sortX })}>
          Sort Values
        </Switch>
      </Section>

      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          data-test="Chart.XAxis.Reverse"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          defaultChecked={options.reverseX}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(reverseX: any) => any' is not assignable to... Remove this comment to see the full error message
          onChange={(reverseX: any) => onOptionsChange({ reverseX })}>
          Reverse Order
        </Switch>
      </Section>

      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {(options.sortX && options.xAxis.type === "category") && (
        <Select
          label="Sort Category By"
          data-test={`Chart.XAxis.sortKind`}
          defaultValue={options.xAxis.sortKind}
          onChange={(sortKind: any) => onOptionsChange({ xAxis: {sortKind} })}>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="category" data-test={`Chart.XAxis.sortKind.name`}>
            Name
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="min" data-test={`Chart.XAxis.sortKind.min`}>
            Minimum
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="max" data-test={`Chart.XAxis.sortKind.max`}>
            Maximum
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="sum" data-test={`Chart.XAxis.sortKind.sum`}>
            Sum
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="mean" data-test={`Chart.XAxis.sortKind.mean`}>
            Mean
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="median" data-test={`Chart.XAxis.sortKind.median`}>
            Median
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          <Select.Option value="array" data-test={`Chart.XAxis.sortKind.array`}>
            Custom List
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Option' does not exist on type '({ class... Remove this comment to see the full error message */}
          </Select.Option>
        </Select>
        )}
      </Section>
      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {(options.sortX && options.xAxis.type === "category" && options.xAxis.sortKind === "array") && (
        <Input
          label={
            <React.Fragment>
              Custom Sort Order List
              <ContextHelp
                placement="topLeft"
                arrowPointAtCenter
                // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element' is not assignable to type 'null | u... Remove this comment to see the full error message
                icon={ContextHelp.defaultIcon}>
                Comma-separated values (e.g. A, C, D, B)
              </ContextHelp>
            </React.Fragment>
          }
          data-test="Chart.XAxis.customSortArray"
          defaultValue={options.xAxis.customSortArray}
          onChange={(e: any) => onOptionsChange({ xAxis: { customSortArray: e.target.value }})}
        />
        )}
      </Section>

      {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <Section>
        {/* @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
        <Switch
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          data-test="Chart.XAxis.ShowLabels"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          defaultChecked={options.xAxis.labels.enabled}
          // @ts-expect-error ts-migrate(2322) FIXME: Type '(enabled: any) => any' is not assignable to ... Remove this comment to see the full error message
          onChange={(enabled: any) => onOptionsChange({ xAxis: { labels: { enabled } } })}>
          Show Labels
        </Switch>
      </Section>
    </React.Fragment>
  );
}

XAxisSettings.propTypes = EditorPropTypes;
