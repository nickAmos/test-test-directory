import 'semantic-ui-css/semantic.min.css';
import '../styling/DepartmentContact.css';

function DepartmentContact({laboratory, externalLab}) {


    console.log(laboratory);
    console.log(externalLab);

let style;
let extension;


    if (laboratory === 'Biochemistry') {
        style = 'ui blue image label large'
        extension = 'add extension here';
    } else if (laboratory === 'Haematology') {
        style = 'ui orange image label large'
        extension = 'add extension here';
    } else if (laboratory.includes('Molecular')) {
        style = 'ui green image label large'
        extension = 'add extension here';
    } else if (laboratory.includes('Flow')) {
        style = 'ui violet image label large'
        extension = 'add extension here';
    } else if (laboratory.includes('Microbiology')) {
        style = 'ui brown image label large'
        extension = 'add extension here';
    } else if (laboratory.includes('Anatomical')) {
        style = 'ui pink image label large'
        extension = 'add extension here';
    } else if (laboratory.includes('Ref')) {
        style = 'ui teal image label large'
        extension = externalLab;
    } else if (laboratory.includes('Clinical')) {
        style = 'ui olive image label large'
        extension = 'add extension here'
    }


    return(
        <div id='departmentButton'>
            <a id='departmentContent'class={style}>
      
            {laboratory}
            <div class="detail">{extension}</div>
            </a> 
        </div>
    )
}


export default DepartmentContact;