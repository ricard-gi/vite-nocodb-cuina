import { useParams } from "react-router-dom";
import ReceptesController from "./controllers/ReceptesController";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";


function Recepta() {

    const { id } = useParams()
    const [recepta, setRecepta] = useState(null);

    useEffect(() => {

        async function getRecepta() {
            const receptesController = new ReceptesController();
            const resposta = await receptesController.getReceptaById(id);
            if (resposta) {
                setRecepta(resposta);

            } else {
                console.log(resposta)
            }
        }

        getRecepta();

    }, [])


    if (!recepta) {
        return (
            <>
                <h1>Recepta no trobada</h1>
            </>
        )
    }

    return (
        <>
            <h1>Recepta</h1>
            <hr />

            <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Card >
                        <Card.Img variant="top" src={recepta.foto} />
                        <Card.Body>
                            <Card.Title>{recepta.nom}</Card.Title>
                            <Card.Text>
                                {recepta.descripcio
                                    ?.replace(/\n/g, "*n*")
                                    .split("*n*")
                                    .map((e, i) => <p key={i}>{e}</p>)
                                }
                            </Card.Text>
                            <Link className="btn btn-outline-primary" to="/">Tornar</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}


export default Recepta;