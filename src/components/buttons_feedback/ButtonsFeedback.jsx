export default function ButtonFeedback({ stateValue,click }) {
    const btnNames = Object.keys(stateValue);

  return (
    <ul>
      {btnNames.map((name) => {
        return (
          <li key={name}>
            <button type="button" onClick={()=>click(name)}>{name}</button>
          </li>
        );
      })}
    </ul>
  );
}
