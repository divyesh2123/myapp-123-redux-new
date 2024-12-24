import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { UserFail, UserRequest, UserSuc } from './action/userAction';

export default function User() {

    const d = useDispatch();

    const op = useSelector(y=>y.user);


    console.log(op);
    useEffect(()=>{

        d(UserRequest())

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            d(UserSuc(y))
        }).catch(p=>{
            d(UserFail(p))
        })


    },[])
  return (
    <div>User</div>
  )
}
