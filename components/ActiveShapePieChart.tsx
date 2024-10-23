'use client'
import { useState } from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


import { PieProps } from 'recharts';

const renderActiveShape = (props: any) => {
	const RADIAN = Math.PI / 180;
	const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			{/* format time and display here */}
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Time ${value}`}</text>
			<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
				{`(${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};


const ActiveShapePieChart = ({ info }: any) => {
	console.dir(info);
	const [activeIndex, setActiveIndex] = useState(0);

	const onPieEnter = ( _: any,index: number) => {
		setActiveIndex(index);
	};

	return (
		<>
			<h1 className="text-xl">Pie Chart</h1>
			<ResponsiveContainer width="75%" height={400}>
		
				<PieChart width={400} height={400}>
					<Pie
						data={info}
						activeIndex={activeIndex}
						activeShape={renderActiveShape}
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						dataKey="totalTime"
						onMouseEnter={onPieEnter}
						
					/>
					</PieChart>
			</ResponsiveContainer>
		</>
	)
}

export default ActiveShapePieChart



// PieChartWithCustomizedLabel
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number, index: number }) => {
// 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// 	const x = cx + radius * Math.cos(-midAngle * RADIAN);
// 	const y = cy + radius * Math.sin(-midAngle * RADIAN);

// 	return (
// 		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// 			{`${(percent * 100).toFixed(0)}%`}
// 		</text>
// 	);
// };

		{/* <PieChart >
				<Pie
					data={info}
					cx="25%"
					cy="50%"
					labelLine={false}
					label={renderCustomizedLabel}
					outerRadius={80}
					fill="#8884d8"
					dataKey="totalTime"
				>
					{info.map((entry: any, index: number) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart> */}