import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { useStores } from '../stores';
import { useHistory } from 'react-router-dom';
import { Auth } from '../models';

const Wrapper = styled.div`
  max-width: 600px;
  margin:30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Component = () => {

  const { AuthStore } = useStores()
  const history = useHistory();

  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(() => {
        console.log('登录成功，跳转到首页');
        history.push('./');
      }).catch(() => {
        console.log('登录失败，什么都不做');
      })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validate = {
    username({ getFieldValue }) {
      return {
        validator(rule, value) {
          if (/\W/.test(value)) return Promise.reject('只能是字母数字下划线');
          if (value.length < 4 || value.length > 10) return Promise.reject('长度为6～14个字符');
          return Promise.resolve();
        }
      }

    }
  }


  return (
    <Wrapper>
      <Title />
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true, message: '输入用户名!'
            },
            validate.username
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!'
            },
            {
              min: 6,
              message: '长度为6～14个字符'
            },
            {
              max: 14,
              message: '长度为6～14个字符'
            }

          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
        </Button>
        </Form.Item>
      </Form>
    </Wrapper>

  );
};



export default Component;