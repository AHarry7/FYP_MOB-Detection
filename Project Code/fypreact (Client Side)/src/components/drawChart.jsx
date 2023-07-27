import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DonutChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const svgBounds = svg.node().getBoundingClientRect();
    const width = svgBounds.width;
    const height = svgBounds.height;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius - 30; // set inner radius

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d.value);

    const arc = d3.arc().outerRadius(radius).innerRadius(innerRadius); // set inner radius

    const color = d3
      .scaleOrdinal()
      .range(["#2196f3", "#ff3d00", "#651fff", "#FF6D28"]);

    const arcs = pie(data);

    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.label))
      .attr("transform", `translate(${width / 2},${height / 2})`);
  }, [data]);

  return <svg ref={ref} width={200} height={150}></svg>;
};

export default DonutChart;
