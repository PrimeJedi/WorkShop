import React from 'react';
import classes from './MyButton.module.css';

const MYButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MYButton