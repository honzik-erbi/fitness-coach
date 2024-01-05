import { Link } from "react-router-dom";

export default function Stats() {

    return(
        <>
        <p>Achievements</p>
        <h2>Beginner</h2>
        <ul>
            <li>
                <p>Beginner:</p>
                <p>Description: Your first session!</p>
                <p>Status: Unlocked</p>
            </li>
            </ul>
            <h2>Medium</h2>
        <ul>
            <li>
                <p>Medium: Šubas Champion</p>
                <p>Description: Eat 3 Paninis in a row!</p>
                <p>Status: Unlocked</p>
            </li>
            </ul>
            <h2>Extreme</h2>
            <ul>
            <li>
                <p>Extreme: Champion of pull-ups</p>
                <p>Description: Do 28 pull-ups in a row!</p>
                <p>Status: Locked</p>
            </li>
        </ul>
        <Link to={"/"}>Go back to dashboard</Link>
        </>
    ) 
}