import { Link } from "react-router-dom";

export default function Exercises() {

    return(
        <>
        <p>Exercises</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}