import React, {useState} from "react";
import State from "./State";
import App_00 from "./components/App_00";
import App_01 from "./components/App_01";
import InputValue from "./components/InputValue";
import Likes from "./components/Likes";
import Counter from "./components/Counter";
import Tmp_xyz from "./components/Tmp_xyz";

function App() {


    return (
        <div>


            <State/>
            <App_00/>
            <App_01/>
            <InputValue/>
            <Likes/>
            <Counter/>
            <Tmp_xyz/>

        </div>
    );
}

export default App;
