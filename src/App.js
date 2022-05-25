import './App.css';
import React from "react";
import "./styles.css";
import SwitchSelector from "react-switch-selector";


const options = [
  {
    label: <span>Tiger Woods</span>,
    value: {
      foo: true
    },
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "Jack Nicklaus",
    value: "bar",
    selectedBackgroundColor: "#fbc531"
  }
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex = options.findIndex(({ value }) => value === "bar");

export default function App() {
  return (
    <div className="Frame48096201">
      <h1 className='pageHeader'>Seneca Learning</h1>
      

      <div className="">
        <p style={{ height: "100px" }}>
          <SwitchSelector
            onChange={onChange}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </p>
      </div>

    </div>
  );
}
