import React from "react";
import State from "./State";
import App_00 from "./components/App_00";
import App_01 from "./components/App_01";
import InputValue from "./components/InputValue";
import Likes from "./components/Likes";
import Counter from "./components/Counter";
import Tmp_xyz from "./components/Tmp_xyz";
import A010 from "./components/A010";
import A011 from "./components/A011";
import A012 from "./components/AO12";
import A013Alisa from "./components/A013Alisa";


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
            <A010/>
            <A011/>
            <A012/>
            <A013Alisa abcd={'abcde'}/>
        </div>

    );
}

export default App;
