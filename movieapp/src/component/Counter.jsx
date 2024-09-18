import React from'react';
import {increment, decrement} from '../app/features/counsterSlice/counterSlice'
import {useSelector, useDispatch} from'react-redux'


const Counter = () => {
    const {count} = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter:{count}</h1>
        <button onClick={dispatch(increment())}>increase</button>
        <button onClick={dispatch(decrement())}>decrease</button>
        </div>
    )
}


export default Counter;