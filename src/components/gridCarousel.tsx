import Carousel from 'react-bootstrap/Carousel';
import Group1 from '../assets/Group1.jpeg';
import Group2 from '../assets/Group2.jpeg';
import Group3 from '../assets/Group3.jpeg';


function GridCarousel() {
    return (
        <Carousel className="shadow-lg corousel-card">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Group1}
                    alt="Gorup Picture"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Group2}
                    alt="Group Picture"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Group3}
                    alt="Group Picture"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default GridCarousel;