import { Link } from "react-router-dom";

export default function Settings() {

    return(
        <>
        <p>Settings</p>
        <Link to={"/dashboard"}>
            Go back
        </Link>
        </>
    ) 
}