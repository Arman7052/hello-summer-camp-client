import Category from "./Category/Category";
import ChooseUs from "./ChooseUs/ChooseUs";
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
           <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;