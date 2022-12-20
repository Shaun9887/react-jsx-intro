const App = () => {
    return (
        <div>
            <Person
                name="Shaun"
                age={25}
                hobbies={["bowling", "watching tv", "drinking beer"]}
            />
            <Person
                name="Brian"
                age={45}
                hobbies={["skateboarding", "making prank calls"]}
            />
            <Person
                name="Sandy"
                age={11}
                hobbies={["reading", "saxophone", "eating vegetables"]}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));