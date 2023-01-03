import "../style/leftside.css";

export default function Left() {
  return (
    <div className="leftSide">
      <ul>
        <li>Home</li>
        <li>
          {" "}
          PUBLIC
          <ul>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </ul>
        </li>
        <li>COLLECTIVES</li>
        <li>TEAMS</li>
      </ul>
    </div>
  );
}
