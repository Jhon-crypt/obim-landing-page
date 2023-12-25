export default function FeatureSection() {

    return (

        <>

            <div className="container mt-4">

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">


                    <div className="feature col text-center">
                        <div className="rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Daily Reminders</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
                        </a>
                    </div>

                    <div className="feature col text-center">
                        <div className="rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Longer Journals</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
                        </a>
                    </div>

                    <div className="feature col text-center">
                        <div className="rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection" /></svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Multiple Entries</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. Well add onto it with another sentence and probably just keep going until we run out of words.</p>
                        <a href="#" className="icon-link">
                            Call to action
                            <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
                        </a>
                    </div>

                </div>
            </div>
        </>

    )

}