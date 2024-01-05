import { Link } from "react-router-dom";

export default function Notifications() {

    return(
        <>
        <p>Notifications</p>
        <ul>
            <li>New alert: Vojta je pejsek</li>
            <li>New alert: Vojta ma nekopara polstar</li>
            <li>New alert: lorem borem</li>
            <li>New alert: lorem porem</li>
            <li>New alert: gagas</li>
            <li>New alert: jalgkag</li>

        </ul>
        <Link to={"/"}>
            Go back
        </Link>
        </>
    ) 
}