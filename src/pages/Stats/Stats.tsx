import { Link } from "react-router-dom";

export default function Stats() {

    return(
        <>
        <p>Stats</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}