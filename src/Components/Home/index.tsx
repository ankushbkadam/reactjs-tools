import { ROUTES } from "../../Constants/routeConstants";
import Carousel from "../Carousel/Carousel";
const Home = () => {
   return (
      <div>
          <Carousel/>
         <section className="container card-section mt-5">
            <h2>Our App Menu</h2>
            <div className="card bg-info rounded">
               <div className="card-body p-5">
                  <h5 className="card-title">Explore App Features</h5>
                  <p className="card-text">Something More About this App Let's Go...</p>
                  <a href={ROUTES.CONVERTER} className="btn btn-primary">Go to Converter</a>
               </div>
            </div>
         </section>
      </div>
   )

}
export default Home;