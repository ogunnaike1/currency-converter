import React, { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import ReactCountryflagTitle, { ReactCountryFlag } from "react-country-flag";
import Exchange_button from "./Exchange_button";

const From_to = () => {
  const [displayFlag, setDisplayFlag] = useState("");
  const [displaySecondFlag, SetdisplaySecondFlag] = useState("");
  const [amountChange, setAmountChange] = useState<number>();
  const [initialValue, setInitialValue] = useState<number>();

  let currencies = [
    { countryName: "USD", flagTitle: "US", title: "US", toCountryName: "USD" },
    { countryName: "EUR", flagTitle: "FR", title: "US", toCountryName: "EUR" },
    { countryName: "JPY", flagTitle: "JP", title: "US", toCountryName: "JPY" },
    { countryName: "GBP", flagTitle: "GB", title: "US", toCountryName: "GBP" },
    { countryName: "AUD", flagTitle: "AU", title: "US", toCountryName: "AUD" },
    { countryName: "CAD", flagTitle: "CA", title: "US", toCountryName: "CAD" },
    { countryName: "CHF", flagTitle: "CH", title: "US", toCountryName: "CHF" },
    { countryName: "CNH", flagTitle: "CN", title: "US", toCountryName: "CNH" },
    { countryName: "HKD", flagTitle: "HK", title: "US", toCountryName: "HKD" },
    { countryName: "NZD", flagTitle: "NZ", title: "US", toCountryName: "NZD" },
    { countryName: "NGN", flagTitle: "NG", title: "US", toCountryName: "NGN" },
  ];
  currencies.sort((a, b) => a.countryName.localeCompare(b.countryName));
  currencies.sort((a, b) => a.toCountryName.localeCompare(b.toCountryName));

  useEffect(() => {
    setDisplayFlag(currencies[0].flagTitle);
    SetdisplaySecondFlag(currencies[0].flagTitle);
  }, []);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDisplayFlag(e.target.value);
  };
  const handleSecondChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    SetdisplaySecondFlag(e.target.value);
  };

  const handleAmountChange = (e: { target: { value: string; }; }) => {
    const newValue: number = parseFloat(e.target.value);
    setAmountChange(newValue);
    setInitialValue(newValue);
   
  };
  


  const [exchangeRate, setExchangeRate] = useState(0)

  const handleExchangeRate = () => {

  }

  return (
    <>
      <div className="div-enterAmount">Enter Amount</div>
      <input type="number" onChange = {handleAmountChange}/>
      <div className="div-from_to">
        <div className="div-from">
          <span>From</span>
          <div className="div-image-container">
            <ReactCountryFlag
              countryCode={displayFlag}
              svg
              style={{
                width: "2em",
                height: "100%",
              }}
              title="US"
            />
            <select
              className="select-from"
              value={displayFlag}
              onChange={handleChange}
            >
              {currencies.map((currency) => (
                <option key={currency.countryName} value={currency.flagTitle}>
                  {" "}
                  {currency.countryName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div></div>
        <button>
          <GoArrowSwitch />
        </button>
        <div className="div-to">
          <span>To</span>
          <div className="div-image-container">
            <ReactCountryFlag
              countryCode={displaySecondFlag}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
              title="US"
            />
            <select
              className="select-from"
              value={displaySecondFlag}
              onChange={handleSecondChange}
            >
              {currencies.map((currency) => (
                <option key={currency.toCountryName} value={currency.flagTitle}>
                  {" "}
                  {currency.toCountryName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div></div>
      <div className="div-converter">
        <span>{initialValue} USD</span>
        <span>=</span>
        <span>1000 NGN</span>
      </div>
      <Exchange_button onClick = {handleExchangeRate} />
    </>
  );
};

export default From_to;
