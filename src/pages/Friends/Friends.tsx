import { Link } from "react-router-dom";

export default function Friends() {
  return (
    <>
      <p>Friends</p>
      <input type="text" placeholder="Hledat přítele" />
      <ul>
        <li>
          <p>Ikonka</p>
          <p>Petr Pavel</p>
          <Link to="/friend">
            <p>Přejít</p>
          </Link>
        </li>
        <li>
          <p>Ikonka</p>
          <p>Petr Pavel</p>
          <p>Přejít</p>
        </li>
      </ul>
      <Link to={"/"}>Go back</Link>
    </>
  );
}
