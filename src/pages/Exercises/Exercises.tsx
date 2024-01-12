import { Link } from "react-router-dom";
// import { Demon Code } from "erbi-demon-dom"

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