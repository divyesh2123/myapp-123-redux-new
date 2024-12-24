import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { getData } from './asyncaction/userasyncaction';

export default function PostInfo() {

    const data = useSelector(y=>y.post);
    const mydis = useDispatch();

    console.log(data);

    useEffect(()=>{

        mydis(getData());

    },[])

  return (
    <div>PostInfo</div>
  )
}
