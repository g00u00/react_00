import React from 'react';

function A013Alisa(props) {

    const constAbcd = props.abcd

    function Welcome(props) {
        return <h1>Привет, {props.name}</h1>;
    }
    const constElement = <Welcome name="Алиса"/>;

    function Welcome1(props) {
        return <h1>Привет, {props.name}</h1>;
    }

    function Comment(props) {
        return (
            <div>
                    {props.name21}
            </div>
        );
    }

    return (
        <div>
            <div>{constElement}</div>
            <Welcome1 name="Алиса"/>
            <Welcome1 name="Базилио"/>
            <Welcome1 name="Буратино"/>
            <Comment name21={"Буратино abc"}/>
            <div> {constAbcd}  </div>
        </div>
    );
}

export default A013Alisa;