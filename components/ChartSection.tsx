import stackedAreaChartData from "@/app/actions/stackedAreaChartData";
import StackedBarChart from "./StackedBarChart";
import { toast } from "@/hooks/use-toast";

const ChartSection = async () => {
	const { data, error } = await stackedAreaChartData()

	if (error) {
		toast({
			description: `Error geting charts ${error}`
		})
		return null
	}



	return (
		<div className="size-96 bg-slate-500">
			<h1 className="text-xl">ChartArea</h1>
			<StackedBarChart info={data} />
		</div>

	)
}

export default ChartSection;