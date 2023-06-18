import '../styling/Container.css';

export default function Container({src}) {

    return (
        <div className='image-container'>
            <img src={src} alt="image Goes here"/>
        </div>
    )
}