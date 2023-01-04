import Title from "./middle/Title";
import "../style/Middle.css";
import Question from "../component/middle/Question";
const results = [
  {
    title: "Component to rerender without calling setState?",
    description:
      "observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 2000,
    answers: 32,
    views: 30,
  },
  {
    title: "Force a React component to rerender without calling setState?",
    description:
      "(to the component), observable object that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 100,
    answers: 2,
    views: 30,
  },
  {
    title: "Rerender without calling setState?",
    description:
      "that I want to listen for changes on. … So I guess my question is: do React components need to have state in order to rerender? Is th",
    vote: 20,
    answers: 3,
    views: 30,
  },
];

export default function Middle() {
  return (
    <div className="middle">
      <Title />
      {results.map((q) => (
        <Question
          title={q.title}
          desc={q.description}
          votes={q.vote}
          answers={q.answers}
          views={q.views}
        />
      ))}
    </div>
  );
}
