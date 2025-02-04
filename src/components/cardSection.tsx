import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

    export default function CardSection() {
        return (
            <Row className="mt-1">
                <Col lg className="mt-5">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg className="mt-5">

                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

                <Col lg className="mt-5">

                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

        );
    }