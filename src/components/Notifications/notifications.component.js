import React from 'react';
import { LiveUpdate } from '@inrupt/solid-react-components';
import { Notifications } from './children';


/**
 * Notification container
 * @type {{compare, $$typeof, type}}
 */
const Notification = React.memo(({ webId, inbox }) => {
  /**
   * get inbox path to subscribe on LiveUpdate component
   */
  const inboxUrl = inbox.map(item => item.path);

  return inboxUrl ? (
    <LiveUpdate subscribe={inboxUrl}>
      <Notifications {...{ webId, inbox }} />
    </LiveUpdate>
  ) : null;
});

export default Notification;
