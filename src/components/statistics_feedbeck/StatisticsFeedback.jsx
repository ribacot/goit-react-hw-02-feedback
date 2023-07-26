
export default function StatisticsFeedback({ stateValue, children }) {
  const namesStat = Object.keys(stateValue);
   
  return (
    <ul>
      {namesStat.map(name => {
          return (
            <li key={name}>
              {name}:{stateValue[name]}
            </li>
          );
      })}
      {children}
    </ul>
  );
}
