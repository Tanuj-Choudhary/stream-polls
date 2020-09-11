// Third Party imports
import React, { useState } from 'react';

import CreatorPollsView from './CreatorPollsView';
import StreamPollsAPI from '../../api/StreamPollsAPI';
import errorController from '../error/errorController';

function CreatorPolls() {
  // Fields state
  const initialFields = {
    question: 'Enter your question here..',
    answers: ['Choose an answer...'],
  };
  const [fields, setfields] = useState(initialFields);

  // Input handle
  function onInputChange(event) {
    // Get input id as name, and value
    const { value, id: name } = event.target;

    // Create fields object with new value
    let newFields = { ...fields };

    // For Question Field
    if (name === 'question') {
      newFields[name] = value;
    }

    // For Answer field
    if (name.includes('answer')) {
      /**
       * Example:
       *         name = answer-0
       *     fieldName = answer
       *    fieldIndex = 0
       *    newFields.answers[0] = value
       */

      const fieldName = name.split('-')[0];
      const fieldIndex = name.split('-')[1];

      newFields[fieldName][fieldIndex] = value;
    }

    // Set state to new value
    setfields(newFields);
    console.log(newFields);
  }

  // Dynamically render fields
  function renderFields(fields) {
    return fields.answers.map((el, index) => (
      <div key={index} className="field">
        <input
          id={`answers-${index}`}
          type="text"
          onChange={onInputChange}
          value={el}
        />
      </div>
    ));
  }

  function handleAddField(event) {
    // Prevent default event (refresh)
    event.preventDefault();

    // Copy to new fields
    const newFields = { ...fields };

    // Add another answwer field
    newFields.answers.push('Choose an answer');

    // Set new Fields
    setfields(newFields);
  }

  async function onSubmit(event) {
    console.log('abc');
    event.preventDefault();

    // Axios config
    // Adding Bearer token to authorization header
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    try {
      // Creating poll
      const poll = {
        poll: {
          question: fields.question,
          answers: fields.answers,
        },
      };

      // Sending poll to API
      await StreamPollsAPI.post('/users/polls', poll, config);

      alert('Poll successfully created');
    } catch (err) {
      errorController(err.response);
    }
  }

  return (
    <CreatorPollsView
      fields={fields}
      handleAddField={handleAddField}
      renderFields={renderFields}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
    />
  );
}

export default CreatorPolls;
