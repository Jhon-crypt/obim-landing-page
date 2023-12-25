import { FaHistory } from "react-icons/fa";
import { BsJournalText } from "react-icons/bs";
import { MdMultipleStop } from "react-icons/md";

export default function FeatureSection() {

    return (

        <>

            <div className="container mt-4">

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">


                    <div className="feature col text-center">
                        <div className="p-3 rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <FaHistory style={{ fontSize: 40 }} />
                        </div>
                        <h3 className="fs-2 text-light">Daily Reminders</h3>
                        <p className="lead" style={{fontWeight:"normal"}}>Get daily reminders on your journals</p>
                    </div>

                    <div className="feature col text-center">
                        <div className="p-3 rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <BsJournalText style={{ fontSize: 40 }} />
                        </div>
                        <h3 className="fs-2 text-light">Longer Journals</h3>
                        <p className="lead" style={{fontWeight:"normal"}}>Write amazing longer journals with images</p>
                    </div>

                    <div className="feature col text-center">
                        <div className="p-3 rounded feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3" style={{ backgroundColor: "#FFECCF" }}>
                            <MdMultipleStop style={{ fontSize: 40 }} />
                        </div>
                        <h3 className="fs-2 text-light">Multiple Entries</h3>
                        <p className="lead" style={{fontWeight:"normal"}}>It supports multiple entries and patterns</p>
                    </div>

                </div>
            </div>
        </>

    )

}