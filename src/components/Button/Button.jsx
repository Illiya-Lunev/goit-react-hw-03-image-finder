import s from './Button.module.css';

function Button({onClick}) {
  return (
    <button type="button" className={s.Button} onClick={() => onClick ()} >
      Load more
    </button>
  );
}

export default Button;