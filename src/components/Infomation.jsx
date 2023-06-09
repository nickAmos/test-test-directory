
import { BloodTests } from "../Tests"
import '../styling/Information.css';

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
                <img src="../src/images/EDTA.png" alt="tube"/>
         
            </div>
            
        </div>
        </>
    )
}