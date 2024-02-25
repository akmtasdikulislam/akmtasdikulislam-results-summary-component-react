import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="result">
          <p>Your Result</p>
          <div className="circle">
            <p className="score">76</p>
            <p>of 100</p>
          </div>
          <p className="result_grade">Great</p>
          <p className="result_overview">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary">
          <p className="title">Summary</p>
          <div className="summary_topic_group">
            <div className="summary_topic" id="reaction">
              <div>
                <img
                  src="./assets/images/icon-reaction.svg"
                  alt=""
                  className="icon"
                />
                <p>Reaction</p>
              </div>
              <p className="summary_score">
                <span>80</span> / 100
              </p>
            </div>
            <div className="summary_topic" id="memory">
              <div>
                <img
                  src="./assets/images/icon-memory.svg"
                  alt=""
                  className="icon"
                />
                <p>Memory</p>
              </div>
              <p className="summary_score">
                <span>92</span> / 100
              </p>
            </div>
            <div className="summary_topic" id="verbal">
              <div>
                <img
                  src="./assets/images/icon-verbal.svg"
                  alt=""
                  className="icon"
                />
                <p>Verbal</p>
              </div>
              <p className="summary_score">
                <span>61</span> / 100
              </p>
            </div>
            <div className="summary_topic" id="visual">
              <div>
                <img
                  src="./assets/images/icon-visual.svg"
                  alt=""
                  className="icon"
                />
                <p>Visual</p>
              </div>
              <p className="summary_score">
                <span>72</span> / 100
              </p>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/akmtasdikulislam">
          Akm Tasdikul Islam
        </a>
        .
      </div>
    </>
  );
}

export default App;
