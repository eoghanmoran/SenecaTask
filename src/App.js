import './App.css';
import React from "react";
import "./styles.css";
import SwitchSelector from "react-switch-selector";


const options1 = [
  {
    label: <span>Cell Wall</span>,
    value: {
      foo: true
    },
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "Ribosomes",
    value: "bar",
    selectedBackgroundColor: "#fbc531"
  }
];

const options2 = [
  {
    label: <span>Cytoplasm</span>,
    value: {
      foo: true
    },
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "Chloplast",
    value: "bar",
    selectedBackgroundColor: "#fbc531"
  }
];

const options3 = [
  {
    label: <span>Partially permeable membrane</span>,
    value: {
      foo: true
    },
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "Impermeable membrane",
    value: "bar",
    selectedBackgroundColor: "#fbc531"
  }
];

const options4 = [
  {
    label: <span>Cellulose</span>,
    value: {
      foo: true
    },
    selectedBackgroundColor: "#0097e6",
  },
  {
    label: "Mitochondria",
    value: "bar",
    selectedBackgroundColor: "#fbc531"
  }
];

const onChange = (newValue) => {
  console.log(newValue);
};

const initialSelectedIndex1 = options1.findIndex(({ value }) => value === "bar");
const initialSelectedIndex2 = options2.findIndex(({ value }) => value === "bar");
const initialSelectedIndex3 = options3.findIndex(({ value }) => value === "bar");
const initialSelectedIndex4 = options4.findIndex(({ value }) => value === "bar");

export default function App() {
  return (
    <div className="">
      <h1>An Animal Cell Contains</h1>


      <div className="">
        <p style={{ height: "80px" }}>
          <SwitchSelector
            onChange={onChange}
            options={options1}
            initialSelectedIndex={initialSelectedIndex1}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </p>
      </div>

      <div className="">
        <p style={{ height: "80px" }}>
          <SwitchSelector
            onChange={onChange}
            options={options2}
            initialSelectedIndex={initialSelectedIndex2}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </p>
      </div>

      <div className="">
        <p style={{ height: "80px" }}>
          <SwitchSelector
            onChange={onChange}
            options={options3}
            initialSelectedIndex={initialSelectedIndex3}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </p>
      </div>

      <div className="">
        <p style={{ height: "80px" }}>
          <SwitchSelector
            onChange={onChange}
            options={options4}
            initialSelectedIndex={initialSelectedIndex4}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}
          />
        </p>
      </div>

    </div>
  );
}
