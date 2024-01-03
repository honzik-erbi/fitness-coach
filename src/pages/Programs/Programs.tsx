import { Link } from "react-router-dom";

export default function Programs() {

    return(
        <>
        <p>Programs</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}