import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from '@reach/router';
import { Nav, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import projectLogo from '../../../assets/images/UClogo.jpg';

const Header = ({ headerShadow }) =>
  <Fragment>
    <div className="header-nav-wrapper header-nav-wrapper-lg" />
    <div
      className={clsx(
        `app-header bg-second header-nav-wrapper header-nav-wrapper-lg w-100 navbar-light`,
        { 'app-header--shadow': headerShadow },
      )}>
      <div className="container-fluid">
        <Nav pills className="mr-auto align-items-center">
          <NavbarBrand to="/" title="UC IT Expo">
            <i className="bg-transparent">
              <img
                alt="UC Project display"
                style={{ width: `50px` }}
                src={projectLogo}
              />
            </i>
            <span className="text-white pl-2">UC IT Expo</span>
          </NavbarBrand>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
          <NavItem>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="d-block mr-1" to="#/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} disabled className="d-block mr-1" to="#/">Disabled</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  </Fragment>;

export default Header;
