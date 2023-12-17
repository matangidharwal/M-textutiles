import React from 'react'

function Alert(props) {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           {/* <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}  */}
           <strong>{props.alert.type}</strong>: {props.alert.msg} 
        </div>
    )
}

export default Alert

//We used props.alert && because if it is null the value further will not be used and if not null we will go futher, this happens because all the JSX will be converted to Javascript Calls!
// {} - used for javascript
// {{}} - used when an object is written in javascript
// `` - used for template literals, allows to embed expressions directly within the string using plaeholders, $(dollar)

