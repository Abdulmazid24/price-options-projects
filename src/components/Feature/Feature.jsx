import { FaCheckCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Feature = ({ feature }) => {
  return (
    <div className="p-2">
      <p className="flex items-center gap-2 font-medium">
        <FaCheckCircle></FaCheckCircle>
        {feature}
      </p>
    </div>
  );
};

export default Feature;
Feature.propTypes = {
  feature: PropTypes.string,
};
