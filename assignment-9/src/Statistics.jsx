import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const assignments = [
  { name: "assignment1", mark: 60 },
  { name: "assignment2", mark: 60 },
  { name: "assignment3", mark: 60 },
  { name: "assignment4", mark: 60 },
  { name: "assignment5", mark: 60 },
  { name: "assignment6", mark: 60 },
  { name: "assignment7", mark: 60 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FA8072", "#008080"];

const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={assignments}
          dataKey="mark"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {assignments.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
