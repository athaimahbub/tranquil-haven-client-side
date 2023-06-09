import Banner from "../Components/Banner/Banner";
import Gallery from "../Components/Gallery/Gallery";
import PopularClasses from "../Components/PopularClasses/PopularClasses";
import PopularInstructor from "../Components/popularInstructor/popularInstructor";



const Home = () => {
    return (
        <div> 
           
            <Banner ></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;