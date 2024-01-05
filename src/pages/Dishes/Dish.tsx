import { Link } from "react-router-dom";

export default function Dish() {
  return (
    <>
      <p>Obrazek</p>
      <p>Jmeno jidla</p>
      <p>Tabulka - hodnoty</p>
      <p>Upvote</p>
      <p>Downvote</p>
      <Link to={"/dishes"}>Go back to dishes</Link>
      <p>-</p>
      <Link to={"/"}>Go back to dashboard</Link>
    </>
  );
}
