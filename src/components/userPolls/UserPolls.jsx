// Third Party imports
import React, { useState } from 'react';

import UserPollsView from './UserPollsView';
import StreamPollsAPI from '../../api/StreamPollsAPI';
import errorController from '../error/errorController';

function UserPolls({ user }) {
  const initialFields = { code: '', selectedAnswer: null };
  const [fields, setfields] = useState(initialFields);

  const initialPolls = [];
  const [polls, setpolls] = useState(initialPolls);

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const [errors, seterrors] = useState({});

  const [isCodeValid, setisCodeValid] = useState(false);
  const [isVoteSelected, setisVoteSelected] = useState(false);

  function handleValidation(newFields) {
    let codeValid = true;
    let voteSelected = true;

    let newErrors = { ...errors };

    // Checking code exists
    if (newFields.code === '') {
      newErrors['code'] = 'Required';
      codeValid = false;
    }

    if (!newFields.selectedAnswer) {
      newErrors['selectedAnswer'] = 'Required';
      voteSelected = false;
    }

    seterrors(newErrors);
    setisCodeValid(codeValid);
    setisVoteSelected(voteSelected);
  }

  function onInputChange(event) {
    const { id: name, value } = event.target;

    let newFields = { ...fields };

    // Handling code
    if (name === 'code') {
      newFields[name] = value;
    }

    // Handling poll vote
    if (name.includes('poll-answer')) {
      newFields['selectedAnswer'] = value;
    }

    setfields(newFields);

    handleValidation(newFields);
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (!isCodeValid) {
      alert('Form is not valid');
      return;
    }

    // Axios config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    try {
      const res = await StreamPollsAPI.get(
        `/users/${fields.code}/polls`,
        config
      );

      setpolls(res.data.data.polls);

      setisButtonClicked(true);
    } catch (err) {
      errorController(err.response);
    }
  }

  async function onVote(event) {
    event.preventDefault();

    if (!isVoteSelected) {
      return alert('Please select an answer');
    }

    const pollID = event.target.closest('.poll').id;

    // Axios config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    const data = { selectedAnswer: fields.selectedAnswer };

    try {
      await StreamPollsAPI.patch(
        `/users/${fields.code}/polls/${pollID}`,
        data,
        config
      );

      alert('Sucessfully voted');

      window.location.reload();
    } catch (err) {
      errorController(err.response);
    }
  }

  return (
    <UserPollsView
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      errors={errors}
      code={fields.code}
      isButtonClicked={isButtonClicked}
      polls={polls}
      onVote={onVote}
      user={user}
    />
  );
}

export default UserPolls;
