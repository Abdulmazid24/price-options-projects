import { useEffect, useState } from 'react';
import PriceOption from './PriceOption/PriceOption';

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    fetch('/PriceOptionsData.json')
      .then(response => response.json())
      .then(data => setPriceOptions(data));
  }, []);

  return (
    <div className="">
      <div className="bg-sky-50 p-4 md:p-8 text-center text-2xl md:text-5xl font-extrabold">
        <h2>Best Prices in the town</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {priceOptions.map(option => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
