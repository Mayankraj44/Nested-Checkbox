import React from "react";
import CheckBoxItem from "../CheckBoxItem/CheckBoxItem";
import styles from "./index.module.css"

const CheckBoxParent = ({ data }) => {
  return (
    <>
      {data?.map((item, ind) => (
        <div
        key={ind}
         className={styles.parent}
        >
          <CheckBoxItem data={item} itemCount={data.length} index={ind} />
        </div>
      ))}
    </>
  );
};

export default CheckBoxParent;
