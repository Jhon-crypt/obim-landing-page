export default function LandingHeroPage() {

    return (

        <>

            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className=" col-lg-6">
                        <img src="./obim_landinghero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700px" height="500px" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-light lh-1 mb-3" style={{ fontSize: 50 }}>
                            A Simple Diary And Mood Tracking App
                        </h1>
                        <p className="lead" style={{ color: "#FFECD4", fontSize: 25, fontWeight: "normal", }}>
                            Obim is the perfect mood tracking and diary app for anyone looking to better to improve mental health.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <img className="me-3" src="https://papercloud.s3.eu-west-3.amazonaws.com/appstore.svg" width="200" alt="Download on App Store" />
                            
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}