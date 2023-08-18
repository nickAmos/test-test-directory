import '../styling/Container.css';

export default function Container({src}) {

    return (
        <div className='image-container'>
            <a target='_blank' rel='noreferrer' href='https://www.austinpathology.org.au/assets/documents/tube-guide-v2-final.pdf?20230526'>
            <img src={src} alt="image Goes here"/>
            </a>
        </div>
    )
}