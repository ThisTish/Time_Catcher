'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts'

const StackedBarChart = ({period, info}: {period?: string, info: any}) => {

	if(!info || info.length === 0){
		return <p>nothing to display yet</p>
	}
	// create the array with the category colors in it as well.(or get the categories from the main getCategories function)
	const categoryKeys = Object.keys(info[0]).filter(key => key !== 'day')

	return (
		<> 
		<h1 className='text-xl'>Stacked Bar Chart</h1>
		<ResponsiveContainer width='100%' height={300}>
			<BarChart
			width={500}
			height={300}
			data={info}
			margin={{
				top: 20,
				right: 30,
				left: 20,
				bottom: 5
			}}
			>
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<XAxis dataKey='day' />
				<YAxis />
				<Tooltip />
				{categoryKeys.map((category, index) => (
					<Bar key={category} dataKey={category} stackId='a' fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
				))}
			</BarChart>
			
		</ResponsiveContainer>
		</>
	)
}

export default StackedBarChart



// 	const data =[

// 	{
// 	day: '10/21',
//     category1: 2390,
//     category2: 3800,
//     category3: 2500,
//   }
// ]