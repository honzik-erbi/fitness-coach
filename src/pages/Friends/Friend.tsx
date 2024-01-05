import { Link } from "react-router-dom";

export default function Friend() {

    return(
        <>
        <p>Friend</p>
        <p>Profilovka</p>
        <p>Jmeno</p>
        <p>Badges</p>
        <p>banner</p>
        <p>status</p>
        <p>status - kratke slovo - info</p>
        <p>bio</p>
        <p>seznam pratel</p>
        <Link to={"/friends"}>Go back to friendlist</Link>
        <p>-</p>
        <Link to={"/"}>Go back to dashboard</Link>
        </>
    ) 
}