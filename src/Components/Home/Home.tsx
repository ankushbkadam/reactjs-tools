import { ROUTES } from "../../Constants/routeConstants";
const Home = () => {
   return (
      <div>
         <div className="container-fluid p-0">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
               </div>
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <img src="./Images/p1.jpg" className="d-block" alt="pic-1" img-fluid />
                  </div>
                  <div className="carousel-item">
                     <img src="./Images/p2.jpg" className="d-block" alt="pic-2" img-fluid />
                  </div>
                  <div className="carousel-item">
                     <img src="/Images/p3.png" className="d-block" alt="pic-3" img-fluid />
                  </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
               </button>
            </div>
         </div>

         <section className="container card-section mt-5">
            <h2>Our App Menu</h2>
            <div className="card">
               <div className="card-body p-5">
                  <h5 className="card-title">Explore App Features</h5>
                  <p className="card-text">.</p>
                  <a href={ROUTES.CONVERTER} className="btn btn-primary">Go to Converter</a>
               </div>
            </div>
         </section>
      </div>
   )
}
export default Home;