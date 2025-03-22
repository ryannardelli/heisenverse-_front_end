import React, { useMemo } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";

type DataType = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const rawData: DataType[] = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 }
];

const colorsPv = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c", "#d0ed57", "#ffc658"];
const colorsUv = ["#ff7300", "#ff9f33", "#ffcc66", "#ffa07a", "#f08080", "#cd5c5c", "#dc143c"];


const Chart: React.FC = React.memo(() => {
  const data = useMemo(() => rawData, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="pv" fill="url(#colorPv)">
          {data.map((entry, index) => (
            <Cell key={`cell-pv-${index}`} fill={colorsPv[index % colorsPv.length]} />
          ))}
        </Bar>

        <Bar dataKey="uv" fill="url(#colorUv)">
          {data.map((entry, index) => (
            <Cell key={`cell-uv-${index}`} fill={colorsUv[index % colorsUv.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
});

export default Chart;
