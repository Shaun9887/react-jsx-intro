function Person({ age, hobbies, name }) {
  const voteText = age >= 18
      ? "You're grown! Go vote!"
      : "You must be 18 to vote!";

  // your browser will issue a stern warning about this; we'll learn how to fix
  // that later.
  const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name.slice(0, 6)}</li>
        <li>Age: {age}</li>
        <li>Hobbies:
        <ul>
          {hobbiesLIs}
        </ul>
        </li>
      </ul>
      <h3>{voteText}</h3>
    </div>
  );
}