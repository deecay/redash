import { includes } from "lodash";
import React from "react";
import { Section, InputNumber, Switch } from "@/components/visualizations/editor";
import { EditorPropTypes } from "@/visualizations";
import { toNumber } from "../plotly/utils";

import AxisSettings from "./AxisSettings";

export default function XAxisSettings({ options, onOptionsChange }) {
  return (
    <React.Fragment>
      <AxisSettings
        id="XAxis"
        features={{ autoDetectType: true }}
        options={options.xAxis}
        onChange={xAxis => onOptionsChange({ xAxis })}
      />

      {includes(["histogram"], options.globalSeriesType) && (
        <React.Fragment>
          <Section>
            <InputNumber
              label="Bin Size"
              className="w-100"
              placeholder="Auto"
              data-test="Chart.XAxis.BinSize"
              defaultValue={options.binSize}
              onChange={binSize => onOptionsChange({ binSize: toNumber(binSize) })}
            />
          </Section>

          <Section>
            <InputNumber
              label="Bin Start"
              className="w-100"
              placeholder="Auto"
              data-test="Chart.XAxis.BinStart"
              defaultValue={options.binStart}
              onChange={binStart => onOptionsChange({ binStart: toNumber(binStart) })}
            />
          </Section>
        </React.Fragment>
      )}

      <Section>
        <Switch
          data-test="Chart.XAxis.Sort"
          defaultChecked={options.sortX}
          onChange={sortX => onOptionsChange({ sortX })}>
          Sort Values
        </Switch>
      </Section>

      <Section>
        <Switch
          data-test="Chart.XAxis.Reverse"
          defaultChecked={options.reverseX}
          onChange={reverseX => onOptionsChange({ reverseX })}>
          Reverse Order
        </Switch>
      </Section>

      <Section>
        <Switch
          data-test="Chart.XAxis.ShowLabels"
          defaultChecked={options.xAxis.labels.enabled}
          onChange={enabled => onOptionsChange({ xAxis: { labels: { enabled } } })}>
          Show Labels
        </Switch>
      </Section>
    </React.Fragment>
  );
}

XAxisSettings.propTypes = EditorPropTypes;
