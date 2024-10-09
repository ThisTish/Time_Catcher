'use server'
import getTotalTime from "@/app/actions/getTotalTime"
import CategoryCard from "./CategoryCard"
import getCategories from '@/app/actions/getCategories'
import getTotalTimeByPeriod from "@/app/actions/getTotalTimeByPeriod"
import { CategoryData } from "@/lib/types"


const CategoryCardSection = async () => {
	const { data, error } = await getCategories()
	if (error) {
		console.log(error)
		return null
	}
	const categoriesWithTime = data ? await Promise.all(
		data.map(async (category) => {
			const totalTimeByDay = await getTotalTimeByPeriod({ categoryId: category.id, period: 'DAY' });
			const totalTimeByWeek = await getTotalTimeByPeriod({ categoryId: category.id, period: 'WEEK' });
			const totalTimeByMonth = await getTotalTimeByPeriod({ categoryId: category.id, period: 'MONTH' });
			return {
				...category,
				totalTimeByDay,
				totalTimeByWeek,
				totalTimeByMonth,
			}
		})
	) : [];
	

	return (
		<div className="flex justify-center items-center flex-col md:flex-row flex-wrap gap-8">
			{categoriesWithTime?.map((category) => (
				<CategoryCard 
					key={category.id}
					id={category.id}
					name={category.name}
					color={category.color}
					totalTime={category.totalTime}
					goals={category.goals}
					totalTimeByDay = {category.totalTimeByDay}
					totalTimeByWeek = {category.totalTimeByWeek}
					totalTimeByMonth = {category.totalTimeByMonth}
				/>
			))}
		</div>
	)

}

export default CategoryCardSection