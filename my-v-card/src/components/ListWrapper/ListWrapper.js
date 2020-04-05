import React from 'react';
import './ListWrapper.css';
import ListItem from './ListItem/ListItem';
import { mySkills } from '../../data/mySkillls';

const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {mySkills.map(el => (
      <ListItem
        image={el.image}
        name={el.name}
        description={el.descrition}
        />
    ))}
  </ul>
)

export default ListWrapper;