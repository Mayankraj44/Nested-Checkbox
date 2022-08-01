import React, { useRef, useState } from "react";
import CheckBoxParent from "./CheckBoxParent";

const CheckBoxItem = ({ data }) => {
  const [expanded, setExpanded] = useState(true);
  const ref = useRef(null);
  const checkBoxRef = useRef(null);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  function handleClick(e) {
    console.log(data.name, " clicked", e);
    const inputs = ref.current.querySelectorAll("input[type=checkbox]");
    if (inputs.length && e.target !== checkBoxRef.current) {
      const inputArray = [...inputs];
      const result = inputArray.map((ele) => ele.checked);
      const checkFlag = result.indexOf(true);
      const unCheckFlag = result.indexOf(false);

      if (checkFlag !== -1 && unCheckFlag !== -1) {
        checkBoxRef.current.indeterminate = true;
      } else if (checkFlag !== -1 && unCheckFlag === -1) {
        checkBoxRef.current.indeterminate = false;
        checkBoxRef.current.checked = true;
      } else {
        checkBoxRef.current.indeterminate = false;
        checkBoxRef.current.checked = false;
      }
    }
  }

  function toggleActiveState(e) {
    const value = e.target.checked;
    e.target.indeterminate = false;
    const inputs = ref.current.querySelectorAll("input[type=checkbox]");

    if (inputs) {
      console.log("inouts", inputs);
      inputs.forEach((element) => {
        element.checked = value;
        element.indeterminate = false;
      });
    }
  }

  return (
    <div onClick={handleClick} className="test">
      <div style={{ display: "flex" }}>
        {
          <div
            className="stateBox"
            style={{ visibility: `${data.children.length === 0 && "hidden"}` }}
            onClick={toggleExpanded}
          >
            {expanded ? "-" : "+"}
          </div>
        }
        <input
          ref={checkBoxRef}
          type="checkbox"
          data-name={data.name}
          defaultValue={false}
          onChange={(e) => toggleActiveState(e)}
        />
        <label>{data.name}</label>
      </div>
      <div ref={ref} style={{ display: `${expanded ? "block" : "none"}` }}>
        <CheckBoxParent data={data.children} />
      </div>
    </div>
  );
};

export default CheckBoxItem;
