import heroImage from './images/home img.jpg';
import image2 from './images/Ellipse 1.png'
const Hero = () => {
    return (
        <>
            <div className=' container '>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='position-relative col-md-6 my-4'>
                        <img src={image2} className='position-absolute bottom-50 ' alt="img" />
                        <h3>Fair price ride</h3>
                        <h1 className='fw-bold'>Rent our <span className='text-warning'>Scooter</span> </h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className='col-md-6 '>
                        <img src={heroImage} className='img-fluid' alt="Scooter boy" />

                    </div>
                </div>
            </div>
        </>
    )
};

export default Hero;