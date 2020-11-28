import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useStores } from '../stores';
import { observer } from 'mobx-react';

const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 10px 100px;
    background-color: #02101f;
    color: #fff;
`;
const Login = styled.div`
    margin-left: auto;
`

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const StyledLink = styled(NavLink)`
    color:#fff;
    margin-left: 30px;
    &.active {
        border-bottom: 1px solid #fff;
    }
`;

const Component = observer(() => {
  const { UserStore, AuthStore } = useStores();
  const history = useHistory();

  const handleLogin = () => {
    console.log('跳转到登录页面');
    history.push('./login')
  };
  
  const handleLogout = () => {
    AuthStore.logout();
    console.log('退出登录，跳转到首页');
    history.push('/')
  };
  const handleRegister = () => {
    console.log('跳转到注册页面');
    history.push('./register');
  };

  useEffect(() => {
    UserStore.pullUser();
  }, [])


  return (
    <Header>
      <h1>Header</h1>
      <nav>
        <StyledLink to="/" exact activeClassName="active">首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于</StyledLink>
      </nav>


      <Login>
        {
          UserStore.currentUser ? <>
            {UserStore.currentUser.attributes.username}<StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
          </> : <>
              <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
              <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
            </>
        }

      </Login>


    </Header>
  );
});
export default Component;