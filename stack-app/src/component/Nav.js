import "../style/nav.css";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="content container">
        <div className="logo">
          <img
            src="https://miro.medium.com/max/1200/0*UEtwA2ask7vQYW06.png"
            alt=""
          />
        </div>
        <ul class="navitems">
          <li>
            <a class="item" href="#">
              About
            </a>
          </li>
          <li>
            <a class="item" href="#">
              Product
            </a>
          </li>
          <li>
            <a class="item" href="#">
              For Teams
            </a>
          </li>
        </ul>
        <div className="search">
          <input class="searchInput" type="text" placeholder="Search..." />
        </div>
        <button class="btnin">Log in</button>
        <button class="btnup">Sign up</button>
      </div>
    </div>
  );
}
