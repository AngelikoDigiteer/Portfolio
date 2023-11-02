import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Responsive from '../img/responsive.webp'



const CarouselSection = () => {
    return (
        <section className='ColorSection secondary-bg' id='Services'>
                <div className='text-center text-white'>
                    <h2 className='fw-bold'>
                        Services offered 
                    </h2>
                </div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100 img-fluid"  src={Responsive} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Front-end Development</h3>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={500}>
                        <img className="d-block w-100 img-fluid" src={Responsive} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Sample Service</h3>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 img-fluid" src={Responsive} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Sample Service</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default CarouselSection