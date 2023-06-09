import Banner from "../Components/Banner/Banner";
import Gallery from "../Components/Gallery/Gallery";
import PopularInstructor from "../Components/popularInstructor/popularInstructor";



const Home = () => {
    return (
        <div> 
           
            <Banner ></Banner>
           
            
            <PopularInstructor></PopularInstructor>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;