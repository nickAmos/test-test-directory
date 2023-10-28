import '../styling/FooterLinks.css';


function FooterLinks ({href, name}) {

    return(
        <div className='Link-container'>
            <div class="ui list" id='listItem'>
                <a class="item" target='_blank' rel='noreferrer' href={href}>
                <i class="right triangle icon white" id='triangle'></i>
                <div class="content">
                        <div class="header" id='linkname'>{name}</div>
                </div>
                </a>
            </div>
        </div>
        
    ) 
}

export default FooterLinks;