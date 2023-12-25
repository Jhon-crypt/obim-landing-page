export default function CallToActionHero() {

    return (

        <>

            <div className="px-4 pt-5 my-5 text-center">
                <h1 className="display-4 fw-bold text-light">Download Obim Now</h1>
                <div className="col-lg-6 mx-auto">

                    <div className="d-grid gap-2 d-sm-flex  justify-content-center mb-5">
                        <img className="me-3" src="https://papercloud.s3.eu-west-3.amazonaws.com/appstore.svg" width="200" alt="Download on App Store" />
                        <img className="me-3" src="https://papercloud.s3.eu-west-3.amazonaws.com/playstore.svg" width="200" alt="Download on App Store" />
                    </div>
                </div>
                <div className="overflow-hidden" style={{ "maxHeight": "80vh" }}>
                    <div className="container px-5">
                        <img src="./calltoaction.png" className="img-fluid rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </>

    )

}