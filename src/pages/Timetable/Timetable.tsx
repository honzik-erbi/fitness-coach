import { Link } from "react-router-dom";

export default function Timetable() {

    return(
        <>
        <p>Timetable</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}