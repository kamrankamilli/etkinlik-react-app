import style from "./SelectBox.module.css";
const SelectBox = (props) => {
  const options = props.options.map((option) => (
    <option key={option.id} data-id={option.id} value={option.name}>
      {option.name}
    </option>
  ));
  return (
    <div className={style["selectbox-control"]}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <select value={props.inputValue} onChange={props.onChange} name={props.name} id={props.id}>
        {options}
      </select>
    </div>
  );
};
export default SelectBox;
