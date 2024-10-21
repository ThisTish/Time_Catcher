'use client'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const BubbleChart = ({info}: any) => {

	const domain = [0, 500]
  	const range = [10, 1000]
	console.dir(info)

	return (
		<>
		<h1 className="text-xl">Bubble Chart</h1>
		<div>
			<ScatterChart
				width={700}
				height={100}
				margin={{
					top: 40,
					right: 0,
					bottom: 0,
					left: 0,
				}}
			>
				<XAxis
					type="category"
					dataKey="day"
					interval={0}
					tick={{ fontSize: 20 }}
					tickLine={{ transform: "translate(0, -6)" }}
				/>
				<YAxis
					type="number"
					dataKey="index"
					name="sunday"
					height={10}
					width={80}
					tick={false}
					tickLine={false}
					axisLine={false}
					label={{ value: "Sunday", position: "insideRight" }}
				/>
				<ZAxis type="number" dataKey="totalTime" domain={domain} range={range} />
				<Tooltip />
				<Scatter data={info} fill="#8884d8" />
			</ScatterChart>
			</div>
		</>
		)
}

		export default BubbleChart