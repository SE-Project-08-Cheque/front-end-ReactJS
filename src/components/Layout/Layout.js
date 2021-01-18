import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, Backdrop </div>
    <main className={classes.Content}>kkk{props.children}</main>
  </Aux>
);
export default layout;
    