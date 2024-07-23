import react from "react";

function List(props) {
  return (
    <li
      onClick={() => {
        return props.lochecked(props.id);
      }}
    >
      {props.value}
    </li>
  );
}
export default List;
