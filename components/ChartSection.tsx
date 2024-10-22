
import stackedAreaChartData from "@/app/actions/stackedAreaChartData";
import StackedBarChart from "./StackedBarChart";
import { toast } from "@/hooks/use-toast";
import BubbleChart from "./BubbleChart";
import bubbleChartData from "@/app/actions/bubbleChartData";
import ActiveShapePieChart from "./ActiveShapePieChart"
import getCategories from "@/app/actions/getCategories";
import { Button } from "./ui/button";


// todo this again, get all info to pass, and format it for each chart here.
const ChartSection = async () => {
	const { data, error } = await stackedAreaChartData()

	const bubbleData = await bubbleChartData('69863d87-a19d-48a2-85f2-97dae86d3477')
	const info = (bubbleData as any)?.info
	const e = bubbleData?.e

	const pieChartData = await getCategories()
	const pieces = pieChartData.data
	const err = pieChartData.error

	if (error || e || err) {
		toast({
			description: `Error getting charts ${error}`
		})
		return null
	}
	console.dir(pieces)

	return (<>
		<h1 className="text-3xl flex flex-col">ChartArea</h1>
		<div className="bg-slate-200 w-full">
			<div className="flex items-center justify-center">
				<ActiveShapePieChart info={pieces} />
				<div className="space-x-5 flex">
					<Button className="bg-white text-slate-800">Day</Button>
					<Button className="bg-white text-slate-800">Week</Button>
					<Button className="bg-white text-slate-800">Month</Button>
					<Button className="bg-white text-slate-800">Year</Button>
				</div>
			</div>
			<BubbleChart info={info} />
			<StackedBarChart info={data} />

		</div>
	</>

	)

}

export default ChartSection;