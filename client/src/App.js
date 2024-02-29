import React, { useEffect } from 'react';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { getUser } from './redux/userSlice';
import { useDispatch } from 'react-redux';
import UpdateUser from './components/UpdateUser';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001');
        dispatch(getUser(response.data));
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
