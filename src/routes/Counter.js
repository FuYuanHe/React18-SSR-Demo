import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import actionCreators from '../store/actionCreators/counter';
function Counter() {
    // const [number, setNumber] = useState(0);
    const  num = useSelector(state=>state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => dispatch(actionCreators.add())}>+</button>
        </div>
    )
}
export default Counter;