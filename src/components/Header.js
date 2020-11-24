import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
  color: #fff;
`;


// 当成函数
const StyledLink = styled(NavLink)`
    color:#fff;
    margin-left: 30px;
    &.active {
        border-bottom: 1px solid #fff;
    }
`
function Component() {
  return (
    <Header>
      <h1>Header</h1>
      <nav>
        <StyledLink to="/" activeClassName="active">首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
    </Header>
  );
}
export default Component;