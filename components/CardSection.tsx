'use server'
import CategoryCard from "./CategoryCard"
import getCategories from '@/app/actions/getCategories'


const CardSection = async () => {
	const { data, error } = await getCategories()
	if (error) {
		console.log(error)
	}

	return (
		<div className="flex justify-center items-center flex-col md:flex-row flex-wrap gap-8">
			{data?.map((category) => (
				<CategoryCard 
					key={category.id}
					id={category.id}
					name={category.name}
					color={category.color}
					totalTime={category.totalTime}
					goals={category.goals}
				/>
			))}
		</div>
	)

}

export default CardSection;