import React from 'react';

function A010() {

    function fullName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    function getGreeting(user) {
        if (user) {
            return <span>Здравствуй {fullName(user)}!</span>;
        }
        return <span>Здравствуй незнакомец.</span>;
    }

    const user = {
        firstName: 'Марья',
        lastName: 'Моревна',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    };

    const element = (<span>element: {fullName(user)}!</span>);
    const getGreeting_prn = (<span>getGreeting_prn: {getGreeting(user)}!</span>);

    const link_00 = <a href="https://www.reactjs.org"> reactjs </a>;
    const a_main = './'
    const link_01 = <a href={a_main}>a_main</a>;
    const img_01 = <img src={user.image} style={{width: 66}}></img>;
    return (
        <div>
            A010 https://ru.reactjs.org/docs/introducing-jsx.html
            <pre> {element}</pre>
            {img_01}
            <pre>{getGreeting_prn}</pre>
            <pre>{link_00}{link_01}</pre>

        </div>
    )

}

export default A010;