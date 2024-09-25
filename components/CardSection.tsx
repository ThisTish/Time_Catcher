import CategoryCard from "./CategoryCard"
import getCategories from '@/app/actions/getCategories'


const CardSection = () => {
	const categories = getCategories()
	return ( 
		<div className="flex justify-center items-center flex-col size-96 gap-8">
			
			<CategoryCard />
		</div>
	 );
}
 
export default CardSection;