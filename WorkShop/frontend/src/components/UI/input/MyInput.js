import React from 'react';
import classes from './MyInput.modele.css';

const MYInput = React.forwardRef((props,ref) => {
    return(
        <input ref = {ref} className={classes.myInput} {...props}/>
    );
});

export default MYInput;