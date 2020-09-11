// Third Party imports
import React from 'react';

// Project imports
import CreatorPolls from '../creatorPolls/CreatorPolls';
import UserPolls from '../userPolls/UserPolls';

function Polls(props) {
  /**
   * To be implemented
   * Render according to user
   * For testing using custom props
   */
  function renderHelper() {
    if (!props.user) {
      return <div>Loading...</div>;
    } else if (props.user.role === 'creator') {
      return <CreatorPolls {...props} />;
    } else if (props.user.role === 'user') {
      return <UserPolls {...props} />;
    } else {
      return <div>Loading...</div>;
    }
  }

  return renderHelper();
}

export default Polls;
