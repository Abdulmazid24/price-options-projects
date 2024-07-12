import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const Routes = ({ route }) => {
  const { path, name } = route;
  console.log(route);
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default Routes;
Routes.propTypes = {
  route: PropTypes.object,
};
