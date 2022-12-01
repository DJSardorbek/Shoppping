import React from 'react'
import classes from "./MyModal.module.css";

export default function MyModal({children, modal, setModal}) {
    const modalClasses = [classes.myModal];
    if(modal){
        modalClasses.push(classes.active);
    }
    return (
        <div 
            className={modalClasses.join(' ')}
            onClick={() => setModal(false)}>
        <div 
            className={classes.myModalContent}
            onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
        </div>
    )
}
