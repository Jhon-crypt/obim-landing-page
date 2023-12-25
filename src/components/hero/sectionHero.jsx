export default function SectionHero() {

    return (

        <>

            <div className="px-4 pt-5 mt-5">
                <br />
                <h1 className="display-4 fw-bold text-light text-center">All the essential tools</h1>
                <p className="container lead text-break text-center" style={{ color: "#FFECD4", fontSize: 25, fontWeight: "normal", }}>
                    Whether you are struggling with anxiety, depression, or just looking for a better way<br/> to manage your mental health, Obim is here to help.
                </p>
                <div className="container col-xxl-8 px-4">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-sm-6">
                            <img src="./section.png" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700px" height="500px" loading="lazy" />
                        </div>
                        <div className="col-sm-6">
                            <h6 className="display-5 fw-bold lh-1 mb-3 text-light">Reflect on your mood and journals</h6>
                            <hr className="text-light"/>
                            <p className="lead">Obim is the perfect mood tracking and diary app for anyone looking to better understand and improve their mental health.</p>
                            <p className="lead">With Obim, you can easily document, track and rate your daily mood and any relevant factors that may have influenced it.</p>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )

}