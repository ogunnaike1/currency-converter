import React from "react";
import { GoArrowSwitch } from "react-icons/go";

const From_to = () => {
  let currencies = [
    { name: "USD", flag: "nigga" },
    { name: "EUR", flag: "nigga" },
    { name: "JPY", flag: "nigga" },
    { name: "GBP", flag: "nigga" },
    { name: "AUD", flag: "nigga" },
    { name: "CAD", flag: "nigga" },
    { name: "CHF", flag: "nigga" },
    { name: "CNH", flag: "nigga" },
    { name: "HKD", flag: "nigga" },
    { name: "NZD", flag: "nigga" },
    { name: "NGN", flag: "nigga" },
  ];
  currencies.sort((a, b) => a.name.localeCompare(b.name));
  currencies.forEach(currency => {
    console.log(currency.name);
  });

  return (
    <>
      <div className="div-from_to">
        <div className="div-from">
          <span>From</span>
          <select className="select-from">
            {currencies.map((currency) => (
              <option key={currency.name}>{currency.name}</option>
            ))}
          </select>
        </div>

        <button>
          <GoArrowSwitch />
        </button>

        <div className="div-to">
          <span>To</span>
          <select className="select-from">
            {currencies.map((currency) => (
              <option key={currency.name}>{currency.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="div-converter">
        <span>100 USD</span>
        <span>=</span>
        <span>1000 NGN</span>
      </div>
    </>
  );
};

export default From_to;
