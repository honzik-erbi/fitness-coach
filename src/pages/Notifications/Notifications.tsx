import { Link } from "react-router-dom";

export default function Notifications() {

    return(
        <>
        <p>Notifications</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}