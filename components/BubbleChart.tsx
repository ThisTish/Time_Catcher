'use client'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer } from 'recharts'


const BubbleChart = ({info}: any) => {

	const domain = [0, 500]
  	const range = [10, 1000]
	// console.log(`hey! ${JSON.stringify(info)}`)

	return (<>
		<div className='flex flex-col space-y-5 m-20 mb-10 bg-white rounded-md p-10'>
		<h1 className="text-xl">Bubble Chart</h1>
		<h2 className='text-lg mx-10'></h2>
		<div className='mx-24'>
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
					name={info[0].category}
					height={10}
					width={80}
					tick={false}
					tickLine={false}
					axisLine={false}
					label={{ value: `${info[0].category}`, position: "insideLeft" }}
				/>
				<ZAxis type="number" dataKey="totalTime" domain={domain} range={range} />
				<Tooltip />
				<Scatter data={info} fill="#8884d8" />
			</ScatterChart>
			</div>
		</div>

		</>
		)
}

		export default BubbleChart