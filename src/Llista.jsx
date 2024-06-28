import { Link } from "react-router-dom";
import ReceptesController from "./controllers/ReceptesController";
import { useEffect, useState } from "react";



function Llista() {

    const [receptes, setReceptes] = useState([]);

    useEffect(() => {

        async function getAllReceptes() {
            const receptesController = new ReceptesController();
            const recs = await receptesController.getAllReceptes();
            if (recs.length) {
                setReceptes(recs);
            } else {
                console.log(recs)
            }
        }

        getAllReceptes();

    }, [])


    if (receptes.length == 0) {
        return (
            <>
                <h1>No hi ha receptes</h1>
            </>
        )
    }

    return (
        <>
            <h1>Llista de receptes</h1>

            <ul>

                {receptes.map((recepta) => {
                    return (
                        <li key={recepta.Id} >
                            <Link to={"/recepta/" + recepta.Id} >{recepta.nom}</Link>
                        </li>
                    )
                })}
            </ul>


        </>
    )
}


export default Llista;