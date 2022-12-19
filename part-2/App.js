const App = () => {
    return (
    <div>
      <Tweet
        name="Shaun Ligg"
        username="shaunnnnn"
        date={new Date().toDateString()}
        message="This app is AWESOME!!"
      />
      <Tweet
        name="Shane Gile"
        username="shauny"
        date={new Date().toDateString()}
        message="Tweet Tweet Tweet Tweet"
      />
      <Tweet
        name="Tony Gonny"
        username="TonyTony"
        date={new Date().toDateString()}
        message="I love to TYPE TYPE TYPE!!!"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))