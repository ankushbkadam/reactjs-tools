import { IMG_LINK } from "../../Constants/globalLinks";

const Carousel = () => {
    return (
        <div className="container-fluid p-0">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-contain active">
                        <img src={IMG_LINK.RGB_TEX} className="d-block w-100" style={{height:'70vh'}} alt="slide_1" img-fluid="true" />
                    </div>
                    <div className="carousel-item carousel-contain">
                        <img src={IMG_LINK.NIGHT_DARK} className="d-block w-100" style={{height:'70vh'}} alt="slide_2" img-fluid="true" />
                    </div>
                    <div className="carousel-item carousel-contain">
                        <img src={IMG_LINK.POLYGON_TEX} className="d-block w-100" style={{height:'70vh'}} alt="slide_3" img-fluid="true" />
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
    )
}
export default Carousel;