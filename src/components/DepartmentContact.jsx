import 'semantic-ui-css/semantic.min.css';

function DepartmentContact({laboratory}) {


    console.log(laboratory);

let style;


    if (laboratory === 'Biochemistry') {
        style = 'ui blue image label'
    } else if (laboratory === 'Haematology') {
        style = 'ui red image label'
    } else if (laboratory.includes('Molecular')) {
        style = 'ui green image label'
    } else if (laboratory.includes('Flow')) {
        style = 'ui purple image label'
    } else if (laboratory.includes('Microbiology')) {
        style = 'ui brown image label'
    } else if (laboratory.includes('Anatomical')) {
        style = 'ui orange image label'
    }


    return(
        <>
        <a class={style}>
      
            {laboratory}
        <div class="detail">+9999</div>
            </a> 
        </>
    )
}


export default DepartmentContact;