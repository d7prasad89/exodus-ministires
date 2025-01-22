import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Victor_Uncle1 from '../assets/Victor_Uncle1.jpeg';
import Card from 'react-bootstrap/Card';
import GridCarousel from "./gridCarousel.tsx";

export default function Gridsection() {
    return (
        <div className="grid-section">
            <Container fluid="sm" className="parent-grid">
                <Row>
                    <Col lg={5} className="mt-5">
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src={Victor_Uncle1}/>
                            <Card.Body>
                                <Card.Title>Evg. Dr.Victor</Card.Title>
                                <Card.Text>
                                    Founder & Director of Exodus Music Ministries
                                </Card.Text>
                                <Button variant="primary">
                                    Learn More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={7} className="mt-5">
                        <GridCarousel></GridCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
            )
            }