import React, {useState} from 'react';

function App_01() {
    const [count, setCount] = useState(5)
    return (
        <div>
            <h1>App_01 {count}</h1>
             {/*<input type="text" value={likes}  />*/}
            <button onClick={() => setCount(count + 1)}>Уменьшить App_01</button>
        </div>
    );
}

export default App_01;

