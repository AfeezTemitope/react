import React from'react';
import {increment, decrement} from '../app/features/counsterSlice/counterSlice'


const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = dispatch()
    return (
        <dv>Counter</dv>
    )
}


export default Counter;