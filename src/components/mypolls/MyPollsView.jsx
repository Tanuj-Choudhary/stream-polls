// Third Party Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Project Imports
import Poll from './Poll';
import './myPollsView.css';

function MyPollsView({ polls, handleRefresh, handleDelete }) {
  function renderPolls() {
    if (polls.length === 0) {
      return <h1>No polls to show</h1>;
    } else if (polls.length > 0) {
      return polls.map((poll) => (
        <Poll key={poll._id} poll={poll} handleDelete={handleDelete} />
      ));
    } else {
      return <h1>Loading...</h1>;
    }
  }

  return (
    <div className="my-polls-page">
      <div className="my-polls-container">
        <div className="my-polls-btns">
          <Link to="/polls">
            <button className="btn poll-btn">Create Poll</button>
          </Link>

          <button onClick={handleRefresh} className="btn refresh-btn">
            Refresh Results
          </button>
        </div>
        {renderPolls()}
      </div>
    </div>
  );
}

export default MyPollsView;
