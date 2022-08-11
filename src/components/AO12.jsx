import React from 'react';

function Ao12(props) {
    function tick() {
        const element = (
            <div>
                 <h3>A012 It is {new Date().toLocaleTimeString()}.</h3>
            </div>
        );
        return element;
    }

    setInterval(tick, 100);

    console.log(tick())

    return (
        <div>{tick()}</div>
    );
}

export default Ao12;
