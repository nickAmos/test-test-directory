import '../styling/Testname.css';


export default function Testname({testName}) {

    return(
        <>
        <div className='testName-container'>
            <h1 id='testName'>{testName}</h1>    
        </div>
        </>
    )
}