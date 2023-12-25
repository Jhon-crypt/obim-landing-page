export default function SecondSectionHero() {

    return (

        <>

            <div className="px-4 pt-5 mt-5">
                <br />
                <h1 className="display-4 fw-bold text-light text-center">Focus on what matters</h1>
                <p className="container lead text-break text-center" style={{ color: "#FFECD4", fontSize: 25, fontWeight: "normal", }}>
                    With Obim, you can get a clear picture of your overall mood timeline<br /> and identify any patterns or triggers</p>
                <div className="container col-xxl-8 px-4">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-sm-6">
                            <h6 className="display-5 fw-bold text-light lh-1 mb-3">Review your emotional timeline</h6>
                            <hr className="text-light" />
                            <p className="lead">All your mood ratings and diaries for the current month are displayed in a timeline formate for you to review, edit or delete.</p>
                            <p className="lead">To open any entry simply touch on the item and a modal will popup. You can also go back to previous months by click on the month at the top left corner and then select a month you would like to go back to.</p>
                        </div>
                        <div className="col-sm-6">
                            <img src="./section2.png" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700px" height="500px" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}