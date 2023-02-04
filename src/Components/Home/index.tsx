import { ROUTES } from "../../Constants/routeConstants";
import Carousel from "../Carousel";

const Home = () => {
   return (
      <>
         <Carousel/>
         <section className="container card-section pt-5 mb-4">
            <h2>Our App Menu</h2>
            <div className="card w-50 bg-info rounded mx-auto">
               <div className="card-body" >
                  <h5 className="card-title">Explore App Features</h5>
                  <p className="card-text">Something More About this App Let's Go...</p>
                  <a href={ROUTES.RGB_TO_HEX} className="btn btn-primary">Go to App</a>
               </div>
            </div>
         </section>
      </>
   )
}
export default Home;