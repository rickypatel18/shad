
import FeatureCard from './FeatureCard'
import FeatureProductCard from './FeatureProductCard'

const Feature = () => {
    return (
        <div className='flex flex-col w-full lg:w-[80%] mx-auto justify-center' style={{paddingBottom:"70px"}}>
            <FeatureCard />
            <FeatureProductCard />
        </div>
    )
}

export default Feature
