import React from 'react';
import { NotificationList, Tabs } from './children';
import { Panel, Title } from './notifications-panel.style';
import { Loader } from '@util-components';



const NotificationsPanel = ({
  notifications,
  markAsRead,
  deleteNotification,
  filterNotification,
  tabs,
  isLoading
}) => (
  <Panel>
    <Title>Notifications</Title>
    {isLoading ? (
      <Loader absolute />
    ) : (
      <React.Fragment>
        <Tabs {...{ list: tabs, click: filterNotification }} />
        <NotificationList {...{ notifications, markAsRead, deleteNotification }} />
      </React.Fragment>
    )}
  </Panel>
);

export default NotificationsPanel;
