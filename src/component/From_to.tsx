import React, { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import ReactCountryflagTitle, { ReactCountryFlag } from "react-country-flag";
import Exchange_button from "./Exchange_button";

const From_to = () => {
  const [displayFlag, setDisplayFlag] = useState("");
  const [displaySecondFlag, setDisplaySecondFlag] = useState("");
  const [amountChange, setAmountChange] = useState<number>(0);
  const [initialValue, setInitialValue] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number>(0);
  const [initialCurrency, setInitialCurrency] = useState('');
  const [convertedCurrency, setConvertedCurrency] = useState('');

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
    setDisplaySecondFlag(currencies[0].flagTitle);
    setInitialCurrency(currencies[0].countryName);
    setConvertedCurrency(currencies[0].countryName);
  
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex: number = parseInt(e.target.value);
    const selectedOption = currencies[selectedIndex];
    setDisplayFlag(selectedOption.flagTitle);
    setInitialCurrency(selectedOption.countryName);
  };

  const handleSecondChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex: number = parseInt(e.target.value);
    const selectedOption = currencies[selectedIndex];
    setDisplaySecondFlag(selectedOption.flagTitle);
    setConvertedCurrency(selectedOption.countryName);
  };

  const handleAmountChange = (e: { target: { value: string; }; }) => {
    const input = e.target.value;
    const newValue: number = input.trim() === '' ? 0 : parseFloat(input);
    setAmountChange(newValue);
    setInitialValue(newValue);
};

  const [exchangeRate, setExchangeRate] = useState(0)
  const handleExchangeRate = () => {
    let result = amountChange / 1500
    setConvertedValue(result)
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
              onChange={handleChange}
            >
              {currencies.map((currency, index) => (
                <option key={currency.countryName} value={index}>
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
              onChange={handleSecondChange}
            >
              {currencies.map((currency, index) => (
                <option key={currency.toCountryName} value={index}>
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
        <span>{initialValue} {initialCurrency}</span>
        <span> = </span>
        <span>{convertedValue} {convertedCurrency}</span>
      </div>
      <Exchange_button onClick = {handleExchangeRate} />
    </>
  );
};

export default From_to;
