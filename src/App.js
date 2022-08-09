import React, {useState} from "react";
import State from "./State";
import App_00 from "./components/App_00"
import Counter from "./components/Counter";
import InputValue from "./components/InputValue";
import Tmp_xyz from "./components/Tmp_xyz";

function App() {


    return (
        <div>
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
{/*            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            /> реализуется двухсторонее связывание*/}

            <State/>
            <App_00/>
            <InputValue/>
            <Counter/>
            <Tmp_xyz/>

        </div>
    );
}

export default App;
