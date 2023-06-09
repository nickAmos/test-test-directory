
import { BloodTests } from "../Tests"

export default function Infomation() {


    return (
        <>
        <div className="results-container">

            <div className="text-container">
                <h1>{BloodTests[0].name}</h1>
               
                <h3>{BloodTests[0].minVolume}</h3>
                <h3>{BloodTests[0].minVolumePaed}</h3>
                <h3>{BloodTests[0].testingDepartment}</h3>
            </div>

            <div className="images">
                <h3>{BloodTests[0].tube}</h3>
         
            </div>
            
        </div>
        </>
    )
}