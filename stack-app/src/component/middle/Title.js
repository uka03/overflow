import "../../style/middle/title.css";
export default function Title() {
  return (
    <div className="title">
      <div className="top">
        <h2>All Questions</h2>
        <button id="askBtn">Ask Question</button>
      </div>

      <div className="bottom">
        <p>23,366,735 questions</p>
        <ul className="btnGrp">
          <li>
            <a href="">Newest</a>
          </li>
          <li>
            <a href="">Active</a>
          </li>
          <li>
            <a href="">
              Bountied <span>243</span>
            </a>
          </li>
          <li>
            <a href="">Unanswered</a>
          </li>
          <li>
            <a href="">More </a>
          </li>
        </ul>
        <button className="filterBtn">Filter</button>
      </div>
    </div>
  );
}
