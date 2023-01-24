
const Converter = () => {
    return (
        <div className=" container-fluid gradient_bg container-box ">
            <h2 className="gradient-text pt-5">Let's Convert Color</h2>
            <div className="container converter-box ">
                <div className="wrapper ">
                    <label>RGB</label>
                    <input type='text' placeholder="Enter RGB Value" />
                </div>
                <div className="wrapper">
                    <label>HEX</label>
                    <input type='text' placeholder="Enter HEX Value" />
                </div>
                {/* <div className="color-box">box</div> */}
            </div>
        </div>

    )
}
export default Converter