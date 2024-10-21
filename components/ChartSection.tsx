
import stackedAreaChartData from "@/app/actions/stackedAreaChartData";
import StackedBarChart from "./StackedBarChart";
import { toast } from "@/hooks/use-toast";
import BubbleChart from "./BubbleChart";
import bubbleChartData from "@/app/actions/bubbleChartData";

const ChartSection = async () => {
	const { data, error } = await stackedAreaChartData()

	const bubbleData = await bubbleChartData('69863d87-a19d-48a2-85f2-97dae86d3477')
	const info = (bubbleData as any)?.info
	const e = bubbleData?.e
	if (error || e) {
		toast({
			description: `Error getting charts ${error}`
		})
		return null
	}
	
	
	
	return (<>
		<h1 className="text-3xl mx-auto">ChartArea</h1>
		<div className="bg-slate-200 w-full space-y-32">
			<BubbleChart info={info}/>
			<StackedBarChart info={data} />

		</div>
		</>

)

}

export default ChartSection;