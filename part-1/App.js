const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Shaun"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))