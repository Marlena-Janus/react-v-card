import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
  <li className="listItem_wrapper">
    <img className="listItem_wrapper_image" src={props.image} />
    {/* do użycia w komponencie z dosawaniem własnych pytań!! */}
    <p>{props.name || 'Jakiś punkt'}</p>
  </li>
)

export default ListItem;