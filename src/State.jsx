import {useState} from "react";

function State(props) {
    // const state = useState(5)
    // console.log(state)
    const [likes, setLikes] = useState(2);
    console.log(likes);
    console.log(setLikes);

    /*   const [value, setValue] = useState('Текст')*/

    function increment() {
        setLikes(likes + 1);
        console.log(likes)
    }

    function decrement() {
        setLikes(likes - 1)
        console.log(likes)
    }

    return(
        <div>
            <h3 style={{backgroundColor: 'lightblue'}}> State: {likes} </h3>
        </div>
    )

}

export default State;