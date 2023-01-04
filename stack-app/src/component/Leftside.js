import "../style/leftside.css";

export default function Left() {
  return (
    <div className="leftSide">
      <ul className="lists">
        <li>Home</li>
        <li>
          {" "}
          PUBLIC
          <ul className="list">
            <li>Questions</li>
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
