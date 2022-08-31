import style from "./Input.module.css";
const DateInput = (props) => {
  return (
    <div className={style.control}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.inputValue}
        onChange={props.onChange}
      />
    </div>
  );
};
export default DateInput;
