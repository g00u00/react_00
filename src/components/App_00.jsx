import {createElement as e, useState} from 'react'

function App_00() {
    const [count, setCount] = useState(5)

    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `App_00 ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick: () => setCount(count + 1)
        }, 'Уменьшить App_00 ')
    ])
}

export default App_00;