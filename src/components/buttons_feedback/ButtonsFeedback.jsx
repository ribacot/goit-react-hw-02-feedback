import capitalize from 'lodash.capitalize';
import css from './ButtonsFeedback.module.css';

export default function ButtonFeedback({ stateValue, click }) {
  const btnNames = Object.keys(stateValue);

  return (
    <ul className={css.list}>
      {btnNames.map(name => {
        return (
          <li key={name}>
            <button
              className={`${css.button} ${css[name]}`}
              type="button"
              onClick={() => click(name)}
            >
              {capitalize(name)}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
