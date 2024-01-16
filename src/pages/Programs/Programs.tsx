import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <>
      <h2>Uvodni pohled</h2>
      <p>Beginner | Medium | Grznar</p>
      <p>Programs</p>
      <p>Beginner</p>
      <p>Medium</p>
      <p>Grznar</p>
      <h2>Proklik</h2>
      <h3>Beginner</h3>
      <Link to={"/program"}>
        <ul>
          <li>
            <p>Cvicime s Vojtou</p>
            <p>Upvotu: 128</p>
            <p>Downvotu: 0</p>
          </li>
        </ul>
      </Link>
      <ul>
        <li>
          <p>Cvicime s Vojtou</p>
          <p>Upvotu: 128</p>
          <p>Downvotu: 0</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>Cvicime s Vojtou</p>
          <p>Upvotu: 128</p>
          <p>Downvotu: 0</p>
        </li>
      </ul>
    </>
  );
}
