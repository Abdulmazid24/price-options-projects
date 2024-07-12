import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
  const { name, price, features, currency } = option;
  return (
    <div className="bg-sky-100 text-gray-900 rounded-lg p-3 text-center space-y-2 border-current border relative">
      <h2>
        <span className="md:text-4xl font-extrabold">
          {price}/<span className="md:text-2xl font-semibold">{currency}</span>
        </span>
        <span className="md:text-2xl font-semibold">/mon</span>
      </h2>
      <h4 className=" md:text-4xl font-extrabold mb-5">{name}</h4>
      <div>
        {features.map((feature, i) => (
          <Feature key={i} feature={feature}></Feature>
        ))}
      </div>
      <button
        type="button"
        className=" mt-2 px-8 py-3 font-bold border border-sky-500 rounded w-full bg-red-100  absolute bottom-0 left-0"
      >
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
PriceOption.propTypes = {
  option: PropTypes.object,
};
