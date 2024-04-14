import './slider.scss'

function Slider({images}){
    return(
        <div className='slider'>
            <div className="bigImage">
            <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
        </div>
        <div className="smallImages">
            {images.slice(1).map((image, index) => (
            <img
                src={image}
                alt=""
                key={index}
                onClick={() => setImageIndex(index + 1)}
            />
            ))}
            </div>
        </div>
    )
}

export default Slider