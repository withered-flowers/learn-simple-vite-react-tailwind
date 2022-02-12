// get a props from parent component named 'textInput'
function SecondComponentSubContent({ textInput }) {
  return (
    <div>
      {textInput === "" ? (
        <pre>I have nothing to show</pre>
      ) : (
        <pre>I write: {textInput}</pre>
      )}
    </div>
  );
}

export default SecondComponentSubContent;
