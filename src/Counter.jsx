import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { DecCounter, IncCounter } from './action/counteraction';

export default function Counter() {

    const d= useSelector(y=>y.counter);

    const op = useDispatch();

    const inc = ()=>{

        op(IncCounter())
    }

    const dec = ()=>{

        op(DecCounter())
    }
    
  return (
    <div>{d}
    
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
