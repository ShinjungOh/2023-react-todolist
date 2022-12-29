import React from 'react';
import { Route, Routes } from 'react-router';

import { Path } from './lib/const/path';
import Home from './ui/pages/Home';
import Todo from './ui/pages/Todo';
import SignUp from './ui/pages/SignUp';
import SignIn from './ui/pages/SignIn';

const Router = () => (
  <Routes>
    <Route path={Path.HOME} element={<Home />} />
    <Route path={Path.SIGNUP} element={<SignUp />} />
    <Route path={Path.SIGNIN} element={<SignIn />} />
    <Route path={Path.TODO} element={<Todo />} />
  </Routes>
);

export default Router;
