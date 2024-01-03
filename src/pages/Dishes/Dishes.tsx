import { Link } from "react-router-dom";

export default function Dishes() {

    return(
        <>
        <p>Dishes</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}