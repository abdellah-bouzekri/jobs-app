import { useState } from "react";
import { experiences } from "./data/data";

function App() {
  const [data, setData] = useState(experiences);
  const [value, setValue] = useState(0);
  const { name, jobs, img } = data[value];

  return (
    <>
      <h1 className="title">Jobs</h1>
      <div className="flex-btn">
        {data.map((user, index) => {
          return (
            <div className="card-user">
              <button
                onClick={() => setValue(index)}
                className={`btn ${value === index && "animate"}`}
                key={index}>
                {user.name}
              </button>
              <img src={user.img} width={150} />
            </div>
          );
        })}
      </div>
      <div className="container">
        <h1>{name}</h1>
        {jobs.map((job, i) => (
          <div key={i} className="content">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <div className="job-duration">
              <h3> duration : {job.duration}</h3>
              <h3> Company : {job.company} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
