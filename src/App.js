import React, { Suspense, lazy } from "react";
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import Loading from './components/Loading';

import Footer from './components/Footer';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));


function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
