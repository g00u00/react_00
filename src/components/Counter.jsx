import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 10);
        console.log(count)
    }

    function decrement() {
        setCount(count - 1)
        console.log(count)
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Увеличить</button> {/*ф-ю не выызываем, а передаем как ссылку*/}
            <button onClick={decrement}>Уменьшить</button>

        </>
    );
};

export default Counter;