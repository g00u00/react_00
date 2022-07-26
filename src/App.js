import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
    // const state = useState(5)
    // console.log(state)
    // const[likes, setLikes] = useState(0);
    // console.log(likes);
    // console.log(setLikes);

    const [value, setValue] = useState('Текст')

    // function increment() {
    //     setLikes(likes + 1);
    //     console.log(likes)
    // }
    // function decrement() {
    //     setLikes(likes - 1)
    //     console.log(likes)
    // }
    return (
        <div className="App">
            {/*
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                type='text'
                value={value}
                onChange={event => setValue(event.target.value)}
                />
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
            <button onClick={() => likes -= 1}>Уменньшить</button>

*/}
            <Counter/>
            <Counter/>
        </div>
    );
}

export default App;
