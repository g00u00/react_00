import React from 'react';

function A011(props) {

    const element_01 = (
        <h3 className="greeting">
            A011 Привет01, мир!
        </h3>
    );



    const element_02 = React.createElement(
        'h3',
        {className: 'greeting'},
        'A011 Привет02, мир!'
    );


    const element_03 = {
        type: 'h3',
        props: {
            className: 'greeting',
            children: 'A011 A011 Привет, мир!',
            backgroundColor: 'green'
        }
    };


    return (
        element_01
/*        element_01.props.children +
        element_02.props.children +
        element_03.props.children
*/
    );
}

export default A011;