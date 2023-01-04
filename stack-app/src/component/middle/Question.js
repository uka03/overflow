import "../../style/middle/Question.css";

export default function Question(props) {
  return (
    <div className="question">
      <div className="static">
        <p className="p">{props.votes} votes</p>
        <p className="p">{props.answers} answers</p>
        <p className="p">{props.views} views</p>
      </div>
      <div className="qMain">
        <h3>{props.title}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}
