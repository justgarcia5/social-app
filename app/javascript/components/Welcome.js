import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Conversations from './Conversations';

const Welcome = () => {
  return (
    <>
      <h1>Display Active Users Account Details</h1>
      <Conversations />
    </>
  )
};

export default Welcome;