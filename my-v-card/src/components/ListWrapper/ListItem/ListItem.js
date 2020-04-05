import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
  image,
  name,
  description
}) => (
  <li className="listItem_wrapper">
    <img className="listItem_wrapper_image"
      alt={name}
      src={image} />
    {/* do użycia w komponencie z dosawaniem własnych pytań!! */}
    <p>{name || 'Jakiś punkt'}</p>
    <p>{description}</p>
  </li>
)

ListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

ListItem.defaultProps = {
  description: 'default',
}

export default ListItem;