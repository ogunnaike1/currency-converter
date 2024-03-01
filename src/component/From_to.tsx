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
  const [initialCurrency, setInitialCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");

  let currencies = [
    { countryName: "USD", flagTitle: "US", title: "US", toCountryName: "USD" },
    { countryName: "EUR", flagTitle: "FR", title: "US", toCountryName: "EUR" },
    { countryName: "GBP", flagTitle: "GB", title: "US", toCountryName: "GBP" },
    { countryName: "CAD", flagTitle: "CA", title: "US", toCountryName: "CAD" },
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

  const handleAmountChange = (e: { target: { value: string } }) => {
    const input = e.target.value;
    const newValue: number = input.trim() === "" ? 0 : parseFloat(input);
    setAmountChange(newValue);
    setInitialValue(newValue);
  };

  const handleExchangeRate = () => {
    displayFlag == "US" &&
      displaySecondFlag == "NG" &&
      setConvertedValue(amountChange * 1618);
    displayFlag == "US" &&
      displaySecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.27);
    displayFlag == "US" &&
      displaySecondFlag == "FR" &&
      setConvertedValue(amountChange / 1.08);
    displayFlag == "US" &&
      displaySecondFlag == "CA" &&
      setConvertedValue(amountChange / 1.36);
    displayFlag == "NG" &&
      displaySecondFlag == "US" &&
      setConvertedValue(amountChange / 1618);
    displayFlag == "NG" &&
      displaySecondFlag == "GB" &&
      setConvertedValue(amountChange / 2048);
    displayFlag == "NG" &&
      displaySecondFlag == "FR" &&
      setConvertedValue(amountChange / 1754);
    displayFlag == "NG" &&
      displaySecondFlag == "CA" &&
      setConvertedValue(amountChange / 1193);
    displayFlag == "FR" &&
      displaySecondFlag == "US" &&
      setConvertedValue(amountChange * 1.08);
    displayFlag == "FR" &&
      displaySecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.17);
    displayFlag == "FR" &&
      displaySecondFlag == "NG" &&
      setConvertedValue(amountChange * 2048);
    displayFlag == "FR" &&
      displaySecondFlag == "CA" &&
      setConvertedValue(amountChange * 1.47);
    displayFlag == "CA" &&
      displaySecondFlag == "US" &&
      setConvertedValue(amountChange / 1.36);
    displayFlag == "CA" &&
      displaySecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.72);
    displayFlag == "CA" &&
      displaySecondFlag == "NG" &&
      setConvertedValue(amountChange * 1193);
    displayFlag == "CA" &&
      displaySecondFlag == "FR" &&
      setConvertedValue(amountChange / 1.47);
    displayFlag == "GB" &&
      displaySecondFlag == "US" &&
      setConvertedValue(amountChange * 1.27);
    displayFlag == "GB" &&
      displaySecondFlag == "CA" &&
      setConvertedValue(amountChange * 1.72);
    displayFlag == "GB" &&
      displaySecondFlag == "NG" &&
      setConvertedValue(amountChange * 2048);
    displayFlag == "GB" &&
      displaySecondFlag == "FR" &&
      setConvertedValue(amountChange * 1.17);
    displayFlag == displaySecondFlag && setConvertedValue(amountChange);
  };

  return (
    <>
      <div className="div-enterAmount">Enter Amount</div>
      <input type="number" onChange={handleAmountChange} />
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
            <select className="select-from" onChange={handleChange}>
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
            <select className="select-from" onChange={handleSecondChange}>
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
        <span>
          {initialValue} {initialCurrency}
        </span>
        <span> = </span>
        <span>
          {convertedValue} {convertedCurrency}
        </span>
      </div>
      <Exchange_button onClick={handleExchangeRate} />
    </>
  );
};

export default From_to;
