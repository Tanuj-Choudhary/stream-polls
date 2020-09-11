import React from 'react';

import Poll from '../mypolls/Poll';
import './userPollsView.css';

function UserPollsView({
  polls,
  onInputChange,
  onSubmit,
  code,
  isButtonClicked,
  onVote,
  user,
  errors,
}) {
  function renderHelper() {
    if (isButtonClicked) {
      return polls.map((poll, i) => {
        if (!user.submittedPolls.includes(poll._id)) {
          console.log(user.submittedPolls[i], poll._id);
          return (
            <form id={poll._id} key={poll._id} className="poll">
              <div className="headers">
                <h2>{polls[i].question}</h2>
              </div>

              {polls[i].answers.map((answer, j) => (
                <div key={j} className="input-box">
                  <input
                    name="poll-radio"
                    onChange={onInputChange}
                    type="radio"
                    id={`poll-answer-${j}`}
                    value={j}
                  />
                  <label className="checkbox-label">{answer}</label>
                </div>
              ))}

              <div className="submit-vote">
                <button onClick={onVote} className="btn vote-btn">
                  Vote
                </button>
              </div>
            </form>
          );
        } else {
          return <Poll key={poll._id} poll={poll} />;
        }
      });
    } else if (!isButtonClicked) {
      return (
        <form className="code-form">
          <label className="label mb-15">Enter Creator's unique Code</label>
          <div className="code-input-wrapper">
            <input
              className="code-input mb-15"
              type="text"
              name="code"
              id="code"
              onChange={onInputChange}
              value={code}
            />
            <span className="error">{errors.code}</span>
          </div>
          <button onClick={onSubmit} className="btn submit-code-btn mb-15">
            Submit Code
          </button>
        </form>
      );
    }
  }

  return (
    <div className="user-polls-page">
      <div className="user-polls-container">{renderHelper()}</div>
    </div>
  );
}

export default UserPollsView;
