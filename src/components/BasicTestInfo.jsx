
import '../styling/BasicTestInfo.css';
import DepartmentContact from './DepartmentContact';

export default function BasicTestInfo({specimen, testcode,laboratory, altNames, externalLab}) {


    return (
        <div className='text-container'>
            <DepartmentContact laboratory={laboratory} externalLab={externalLab}/>
            <p id='info'><b>Specimen type:</b> <span id='variable' >{specimen}</span></p>
            <p id='info'><b>CSR Test code:</b> <span id='variable' >{testcode}</span></p>
            {altNames ? <p id='info'><b>Alternate names:</b> <span id='variable'>{altNames}</span></p> : null }
        </div>


    )
}



/*     OLD DEPARTMENT CONTACT:      {(laboratory === 'Referred Test') ? <p id='info'><b>Reffered to:</b> <span id='variable'>{testInfo['External Laboratory']}</span></p> : <p id='info'><b>Testing department:</b> <span id='variable' > {laboratory}</span></p> }
*/