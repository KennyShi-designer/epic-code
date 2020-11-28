import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';

const Home = observer(() => {
  const { UserStore } = useStores();
  const User = () => <div>Hello, {UserStore.currentUser.attributes.username}</div>
  return (
    <>
      <h1>
        {
          UserStore.currentUser ? <>
            <User />
          </> : <>用户未登录</>
        }
      </h1>
    </>
  );
})

export default Home;