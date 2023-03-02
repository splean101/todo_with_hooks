import React from 'react';
import Button from './Button';

const ListItem = ({children}) => {
  return <li>
    {children}
    <Button>del</Button>
  </li>;
};

export default ListItem;
