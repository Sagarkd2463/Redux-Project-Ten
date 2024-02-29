import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../redux/userSlice';

function Users() {

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {

        axios.delete(`http://localhost:3001/delete/${id}`)
        .then(res => dispatch(deleteUser({id})))
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success btn-sm'>
                    Add +
                </Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>
                                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger me-2'>Delete</button>
                                            <Link to={`/edit/${user.id}`} className='btn btn-sm btn-success'>Update</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;