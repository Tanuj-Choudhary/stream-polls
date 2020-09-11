import React from 'react';

import './creatorPollsView.css';
import { Link } from 'react-router-dom';

export default function CreatorPollsView({
  fields,
  handleAddField,
  renderFields,
  onInputChange,
  onSubmit,
}) {
  return (
    <div className="creator-polls-page">
      <div className="polls-container">
        <div className="polls-content">
          <form>
            <h1>Create Poll</h1>

            <div className="block">
              <label className="label">Question</label>
              <div className="field">
                <input
                  id="question"
                  type="text"
                  value={fields.question}
                  onChange={onInputChange}
                />
              </div>

              <label className="label">Answer Options</label>
              {renderFields(fields)}
            </div>
            <div className="poll-btns">
              <div className="poll-btns-left">
                <button onClick={onSubmit} className="btn poll-btn">
                  Create Poll
                </button>
                <button onClick={handleAddField} className="btn field-btn">
                  Add Field
                </button>
              </div>

              <div className="poll-btns-right">
                <Link to="/mypolls">
                  <button className="btn results-btn">Show Results</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
