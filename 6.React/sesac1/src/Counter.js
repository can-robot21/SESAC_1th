import { useState } from 'react';
import CounterResult from './CounterResult'


const Counter = (props) => {
    console.log('Counter 호출');

    const [ count, setCount ]  = useState(props.a);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onclick={onIncrease}>+</button>
            <button onclick={onDecrease}>-</button>
            {/* CounterResult 라는 컴포넌트 불러서....
                홀수/짝수 출력하는 컴포넌트를 만드시오. */}
                <CounterResult num={count} />
        </div>
    )
}

export default Counter;