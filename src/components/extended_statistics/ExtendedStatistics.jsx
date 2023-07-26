export default function ExtendedStatistics({ total, percentag }) {
  const totalEl = total();
  const percentagEl = Math.round(percentag());
  return (
    <>
      <li>Total: {totalEl} </li>
      <li>Psitive feedback: {percentagEl}% </li>
    </>
  );
}
