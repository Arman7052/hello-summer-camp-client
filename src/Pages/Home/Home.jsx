import Category from "./Category/Category";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Banner from "./Shared/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;