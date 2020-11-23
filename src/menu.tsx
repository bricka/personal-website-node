import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ACTIVE_CLASS_NAME = 'selectedMenuItem';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;

  a {
  border-width: 1px;
  border-style: solid;
  border-color: #D9D9D9 #909090 #909090 #D9D9D9;
  text-align: center;
  text-decoration: none;
  margin: 0px 5px 0px 10px;
  padding: 2px;

  &:hover, &.selectedMenuItem {
  background : #B7B7B7;
  border-color : #909090 #D9D9D9 #D9D9D9 #909090;
  }
  }
`;

export default function Menu() {
  return (
    <MenuWrapper>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        exact
        to="/"
      >
        <FormattedMessage
          id="menu.home"
          defaultMessage="Home"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/resume"
      >
        <FormattedMessage
          id="menu.resume"
          defaultMessage="Resume"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/courses"
      >
        <FormattedMessage
          id="menu.courses"
          defaultMessage="Courses"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/projects"
      >
        <FormattedMessage
          id="menu.projects"
          defaultMessage="Projects"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/contact"
      >
        <FormattedMessage
          id="menu.contact"
          defaultMessage="Contact"
        />
      </NavLink>
    </MenuWrapper>
  );
}
