import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';

const NavWrapper = styled.nav`
  background: #ffffff;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  line-height: 24px;
  > ul{
    display: flex;
    > li{
      width: 33.3333%;
      text-align: center;
      > a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0; 
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: rgb(233, 73, 73);
          .icon{
            fill: rgb(233, 73, 73);
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            <span>记账</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;