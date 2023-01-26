import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}
const Content = () => {
    return (
        <React.Fragment>
            <p>Lorem </p>
            <p>Lorem </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
