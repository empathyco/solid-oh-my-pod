import React from "react";
import { Item, Separator } from "./toolbar.style";

/**
 * Checks if the components needs to rerender or not based on inbox changes
 * @param {Object} prevProps Previous props object
 * @param {Object} nextProps Next props object
 */
const areEqual = (prevProps, nextProps) => {
  const prevInbox =
    prevProps &&
    prevProps.toolbar.length > 1 &&
    prevProps.toolbar[1].component().props.inbox;
  const nextInbox =
    nextProps &&
    nextProps.toolbar.length > 1 &&
    nextProps.toolbar[1].component().props.inbox;

  if (prevInbox && prevInbox.length !== nextInbox && nextInbox.length) {
    return false;
  }

  if (prevProps.open !== nextProps.open) {
    return false;
  }

  return true;
};

const Toolbar = React.memo(
  ({ toolbar, open, customClass }) => (
    <nav className="nav nav__toolbar">
      <Separator></Separator>
      <ul>
        {toolbar &&
          toolbar.map(({ component: Component, props }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item key={i} data-testid="item">
              <Component {...props} open={open} customClass={customClass} />
            </Item>
          ))}
      </ul>
    </nav>
  ),
  areEqual
);

export default Toolbar;
