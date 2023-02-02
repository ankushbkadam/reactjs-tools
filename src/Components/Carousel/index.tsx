import { IMGLINK } from "../../Constants/imagelinkConstant";

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
                        <img src={IMGLINK.pic1} className="d-block w-100" style={{height:'70vh'}} alt="pic-1" img-fluid />
                    </div>
                    <div className="carousel-item carousel-contain">
                        <img src={IMGLINK.pic2} className="d-block w-100" style={{height:'70vh'}} alt="pic-2" img-fluid />
                    </div>
                    <div className="carousel-item carousel-contain">
                        <img src={IMGLINK.pic3} className="d-block w-100" style={{height:'70vh'}} alt="pic-3" img-fluid />
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