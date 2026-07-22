import "./globals.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
        <Skill />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/jonas.jpeg" alt="jonas" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, cook and eat or to just
        enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="pink" />
      <Skill skill="HTML+CSS" color="orange" />
      <Skill skill="Javascript" color="yellow" />
      <Skill skill="Svelte" color="grey" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}
