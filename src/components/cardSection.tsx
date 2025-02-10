import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Group1 from '../assets/Group1.jpeg';
import Group2 from '../assets/Group2.jpeg';
import Group3 from '../assets/Group3.jpeg';

    export default function CardSection() {
        return (
            <Row className="mt-1">
                <Col lg className="mt-5">
                    <Card>
                        <Card.Img variant="top" src={Group1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in.  Really Long Text.
                                And lot of texts. And lot of texts. And lot of texts. And lot of texts. And lot of texts.
                            </Card.Text>
                            <Button variant="primary">
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg className="mt-5">

                    <Card>
                        <Card.Img variant="top" src={Group2} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            <Button variant="primary">
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg className="mt-5">

                    <Card>
                        <Card.Img variant="top" src={Group3} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                            <Button variant="primary">
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

        );
    }