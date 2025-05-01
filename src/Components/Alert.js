import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase(); // this will convert the word to lower case, if it is not already in lower case.
        return lower.charAt(0).toUpperCase() + lower.slice(1); // this will convert the first letter of the word to upper case.
        //The slice is used for keeping the rest of the string as it is.
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} {/* the .type, is for showing whether it is success,
        fail or etc., whereas, the message will show the message regarding the type. */}
        
    </div>
  )
}
