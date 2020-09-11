import React from 'react';

import './poll.css';
import crossIcon from '../../images/close.svg';

function Poll({ poll, handleDelete }) {
  function calcPercentage(votes, totalVotes) {
    if (totalVotes === 0) {
      return '0%';
    }
    const percentage = (votes * 100) / totalVotes;

    return percentage.toFixed(2).toString() + '%';
  }

  function renderAnswers() {
    return poll.answers.map((answer, index) => (
      <div key={index} className="ans-block">
        <div className="ans-block-left">{answer}</div>
        <div className="ans-block-right">
          <div className="ans-percentage">
            {calcPercentage(poll.answersCount[index], poll.totalVotes)}
          </div>
          <div className="ans-votes">({poll.answersCount[index]} Votes)</div>
        </div>
      </div>
    ));
  }

  return (
    <div className="poll" id={poll._id}>
      <header className="header">
        <h2 className="question">{poll.question}</h2>

        <button onClick={handleDelete} className="delete-btn">
          <img className="cross-icon" src={crossIcon} alt="delete-icon" />
        </button>
      </header>

      <div className="my-poll-info">
        The result after {poll.totalVotes} people voted:
      </div>

      <div className="results">
        {renderAnswers()}
        <div className="total-votes">
          Total Votes: <span>{poll.totalVotes}</span>{' '}
        </div>
      </div>
    </div>
  );
}
export default Poll;
