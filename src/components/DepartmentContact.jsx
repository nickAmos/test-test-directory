import 'semantic-ui-css/semantic.min.css';
import '../styling/DepartmentContact.css';

function DepartmentContact({laboratory}) {


    console.log(laboratory);

let style;


    if (laboratory === 'Biochemistry') {
        style = 'ui blue image label large'
    } else if (laboratory === 'Haematology') {
        style = 'ui orange image label large'
    } else if (laboratory.includes('Molecular')) {
        style = 'ui green image label large'
    } else if (laboratory.includes('Flow')) {
        style = 'ui violet image label large'
    } else if (laboratory.includes('Microbiology')) {
        style = 'ui brown image label large'
    } else if (laboratory.includes('Anatomical')) {
        style = 'ui pink image label large'
    } else if (laboratory.includes('Ref')) {
        style = 'ui teal image label large'
    }


    return(
        <div id='departmentButton'>
            <a id='departmentContent'class={style}>
      
            {laboratory}
            <div class="detail">+9999</div>
            </a> 
        </div>
    )
}


export default DepartmentContact;