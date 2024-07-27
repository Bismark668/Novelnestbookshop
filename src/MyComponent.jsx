import PropTypes from 'prop-types';

const MyComponent = ({ name, age, isActive }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

// Define the prop types
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isActive: PropTypes.bool
};

export default MyComponent;
