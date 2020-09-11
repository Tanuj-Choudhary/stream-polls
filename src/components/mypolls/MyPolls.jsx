// Third Party Imports
import React, { useState, useEffect } from 'react';

// Project Imports
import MyPollsView from './MyPollsView';
import StreamPollsAPI from '../../api/StreamPollsAPI';
import { Redirect } from 'react-router-dom';
import errorController from '../error/errorController';

function MyPolls(props) {
  const initialPolls = [];
  const [polls, setpolls] = useState(initialPolls);

  useEffect(() => {
    async function fetchPolls() {
      // Axios config
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      // Fetch polls
      const res = await StreamPollsAPI.get('/users/mypolls', config);

      // Update polls
      setpolls(res.data.data.polls);
    }

    fetchPolls();
  }, []);

  function handleRefresh() {
    window.location.reload();
  }

  async function handleDelete(event) {
    if (!window.confirm('Are you sure want to delete this poll')) {
      return;
    }

    const pollID = event.target.closest('.poll').id;

    // Axios config
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    try {
      await StreamPollsAPI.delete(`/users/polls/${pollID}`, config);

      alert('Poll successfully deleted');
      window.location.reload();
    } catch (err) {
      errorController(err.response);
    }
  }

  function renderHelper() {
    if (!props.user) {
      return <div>Loading...</div>;
    } else if (props.user.role === 'creator') {
      return (
        <MyPollsView
          handleDelete={handleDelete}
          handleRefresh={handleRefresh}
          polls={polls}
        />
      );
    } else if (props.user.role === 'user') {
      return <Redirect to={{ pathname: '/page404' }} />;
    } else {
      return <div>Loading...</div>;
    }
  }

  return renderHelper();
}

export default MyPolls;
