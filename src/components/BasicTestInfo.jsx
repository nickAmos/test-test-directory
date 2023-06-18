
import '../styling/BasicTestInfo.css';

export default function BasicTestInfo({specimen, container, testcode, testInfo, laboratory, altNames}) {


    return (
        <div className='text-container'>
            <p id='info'><b>Specimen type:</b> <span id='variable' >{specimen}</span></p>
            <p id='info'><b>Container:</b> <span id='variable'>{container}</span></p>
            <p id='info'><b>CSR Test code:</b> <span id='variable' >{testcode}</span></p>
            {(laboratory === 'Referred Test') ? <p><b>Reffered to:</b> {testInfo['External Laboratory']}</p> : <p id='info'><b>Testing department:</b> <span id='variable' > {laboratory}</span></p> }
            {altNames ? <p id='info'><b>Alternate names:</b> <span id='variable'>{altNames}</span></p> : null }
        </div>


    )
}