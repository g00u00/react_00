import React, {useState} from 'react';

function Likes(props) {
    const [likes, setLikes] = useState(10)
    return (
        <div>
            <h1>Likes: {likes}</h1>
            <input
                type='text'
                value={likes}
                onChange={event => setLikes(event.target.value)}
            />
{/*            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>*/}
            <button onClick={() => setLikes(likes-1)}>Уменьшить</button>


            {/*            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            /> реализуется двухсторонее связывание*/}


        </div>
    );
}

export default Likes;



