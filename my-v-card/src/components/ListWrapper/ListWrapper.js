import React from 'react';
import './ListWrapper.css';
import ListItem from './ListItem/ListItem';
import { mySkills } from '../../data/mySkillls';

const ListWrapper = () => (
  <ul className="listWrapper__wrapper">
    {mySkills.map(el => (
      <ListItem key={el.name} {...el} />
    ))}
  </ul>
)

export default ListWrapper;