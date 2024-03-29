import React, { useEffect, useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
import ReactCountryflagTitle, { ReactCountryFlag } from "react-country-flag";
import Exchange_button from "./Exchange_button";

const From_to = () => {
  const [displayedFlag, setDisplayFlag] = useState("");
  const [displayedSecondFlag, setdisplayedSecondFlag] = useState("");
  const [amountChange, setAmountChange] = useState<number>(0);
  const [initialValue, setInitialValue] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number>(0);
  const [initialCurrency, setInitialCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState("");

  let currencies = [
    { countryName: "USD", flagTitle: "US", title: "US", toCountryName: "USD" },
    { countryName: "EUR", flagTitle: "FR", title: "FR", toCountryName: "EUR" },
    { countryName: "GBP", flagTitle: "GB", title: "GB", toCountryName: "GBP" },
    { countryName: "CAD", flagTitle: "CA", title: "CA", toCountryName: "CAD" },
    { countryName: "NGN", flagTitle: "NG", title: "NG", toCountryName: "NGN" },
  ];

  currencies.sort((a, b) => a.countryName.localeCompare(b.countryName));
  currencies.sort((a, b) => a.toCountryName.localeCompare(b.toCountryName));

  useEffect(() => {
    setDisplayFlag(currencies[0].flagTitle);
    setdisplayedSecondFlag(currencies[0].flagTitle);
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
    setdisplayedSecondFlag(selectedOption.flagTitle);
    setConvertedCurrency(selectedOption.countryName);
  };

  const handleAmountChange = (e: { target: { value: string } }) => {
    const input = e.target.value;
    const newValue: number = input.trim() === "" ? 0 : parseFloat(input);
    setAmountChange(newValue);
    setInitialValue(newValue);
  };

  const handleExchangeRate = () => {
    displayedFlag == "US" &&
      displayedSecondFlag == "NG" &&
      setConvertedValue(amountChange * 1618);
    displayedFlag == "US" &&
      displayedSecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.27);
    displayedFlag == "US" &&
      displayedSecondFlag == "FR" &&
      setConvertedValue(amountChange / 1.08);
    displayedFlag == "US" &&
      displayedSecondFlag == "CA" &&
      setConvertedValue(amountChange / 1.36);
    displayedFlag == "NG" &&
      displayedSecondFlag == "US" &&
      setConvertedValue(amountChange / 1618);
    displayedFlag == "NG" &&
      displayedSecondFlag == "GB" &&
      setConvertedValue(amountChange / 2048);
    displayedFlag == "NG" &&
      displayedSecondFlag == "FR" &&
      setConvertedValue(amountChange / 1754);
    displayedFlag == "NG" &&
      displayedSecondFlag == "CA" &&
      setConvertedValue(amountChange / 1193);
    displayedFlag == "FR" &&
      displayedSecondFlag == "US" &&
      setConvertedValue(amountChange * 1.08);
    displayedFlag == "FR" &&
      displayedSecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.17);
    displayedFlag == "FR" &&
      displayedSecondFlag == "NG" &&
      setConvertedValue(amountChange * 2048);
    displayedFlag == "FR" &&
      displayedSecondFlag == "CA" &&
      setConvertedValue(amountChange * 1.47);
    displayedFlag == "CA" &&
      displayedSecondFlag == "US" &&
      setConvertedValue(amountChange / 1.36);
    displayedFlag == "CA" &&
      displayedSecondFlag == "GB" &&
      setConvertedValue(amountChange / 1.72);
    displayedFlag == "CA" &&
      displayedSecondFlag == "NG" &&
      setConvertedValue(amountChange * 1193);
    displayedFlag == "CA" &&
      displayedSecondFlag == "FR" &&
      setConvertedValue(amountChange / 1.47);
    displayedFlag == "GB" &&
      displayedSecondFlag == "US" &&
      setConvertedValue(amountChange * 1.27);
    displayedFlag == "GB" &&
      displayedSecondFlag == "CA" &&
      setConvertedValue(amountChange * 1.72);
    displayedFlag == "GB" &&
      displayedSecondFlag == "NG" &&
      setConvertedValue(amountChange * 2048);
    displayedFlag == "GB" &&
      displayedSecondFlag == "FR" &&
      setConvertedValue(amountChange * 1.17);
    displayedFlag == displayedSecondFlag && setConvertedValue(amountChange);
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
              countryCode={displayedSecondFlag}
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
