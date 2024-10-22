'use client'
import getCategories from '@/app/actions/getCategories'
import { toast } from "@/hooks/use-toast";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};


const ActiveShapePieChart = ({ info }: any) => {
	console.dir(info)


	return (<>
		<h1 className="text-xl">Pie Chart</h1>
		<ResponsiveContainer width="30%" height={200}>
			<PieChart >
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
					{info.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	</>
	)
}

export default ActiveShapePieChart