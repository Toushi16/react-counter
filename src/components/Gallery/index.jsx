import './index.css';
import image from '../../assets/ImageLinks'


const Gallery = () => {
    return (
        <div className='Gallery'>
            {
                image.map(img => (
                    <img src={img.url}/>
                ))  
            }
        </div>
    )
};

export default Gallery;