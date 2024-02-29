import React from "react";
import { GoArrowSwitch } from "react-icons/go";
import ReactCountryflagTitle, { ReactCountryFlag } from "react-country-flag"

const From_to = () => {
  let currencies = [
    { name: "USD", flagTitle: "US"  , title :"US"},
    { name: "EUR", flagTitle: "nigga" , title :"US" },
    { name: "JPY", flagTitle: "nigga" , title :"US"},
    { name: "GBP", flagTitle: "nigga" , title :"US"},
    { name: "AUD", flagTitle: "nigga" , title :"US"},
    { name: "CAD", flagTitle: "nigga" , title :"US"},
    { name: "CHF", flagTitle: "nigga" , title :"US"},
    { name: "CNH", flagTitle: "nigga" , title :"US"},
    { name: "HKD", flagTitle: "nigga" , title :"US"},
    { name: "NZD", flagTitle: "nigga" , title :"US"},
    { name: "NGN", flagTitle: "nigga" , title :"US"},
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
          <div className="div-image-container">
          <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />
          <select className="select-from">
            {currencies.map((currency) => (
              <option key={currency.name} > {currency.name}</option>
            ))}
          </select>
          </div>
        </div>
        <div>

        </div>
        <button>
          <GoArrowSwitch />
        </button>

        <div className="div-to">
          <span>To</span>
          <div className="div-image-container">
          <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title="US"
            />
          <select className="select-from">
            {currencies.map((currency) => (
              <option key={currency.name} > {currency.name}</option>
            ))}
          </select>
          </div>
        </div>
      </div>
      

      <div>
        
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
