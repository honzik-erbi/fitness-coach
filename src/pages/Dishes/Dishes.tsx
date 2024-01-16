import { Link } from "react-router-dom";

export default function Dishes() {
  return (
    <>
      <p>Dishes</p>
      <p>Filtr</p>
      <Link to={"/dish"}>
        <ul>
          <li>
            <p>Obrazek</p>
            <p>Jmeno jidla</p>
            <p>Prejit</p>
          </li>
        </ul>
      </Link>
      <Link to={"/dashboard"}>Go back</Link>
    </>
  );
}
