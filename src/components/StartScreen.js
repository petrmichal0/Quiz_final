function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Lets start
      </button>
    </div>
  );
}

export default StartScreen;
