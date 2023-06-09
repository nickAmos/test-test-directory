import '../styling/InfomationStyle.css';
import { BloodTests } from "../Tests"


export default function Infomation(props) {


    return (
        <>
        <div className="results-container">

            <div className="text-container">
                <p>{BloodTests[0].name}</p>
                <p>Minimum volume: {BloodTests[0].minVolume} ml</p>
                <p>Minimum volume peadiatric: {BloodTests[0].minVolumePaed} ml</p>
                <p>Department: {BloodTests[0].testingDepartment}</p>
                
            </div>

            <div className="images">
                <h3>{BloodTests[0].tube}</h3>
                <img src={props.image} alt="tube"/>
         
            </div>
            
        </div>
        </>
    )
}