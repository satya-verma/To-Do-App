import React from 'react';

const Submit = ({ onclick, onchange }) => {
    return (
        <div className="ma3 tc">
            <input type="text" placeholder="Enter to-do" className="pa2" onChange={onchange} />
            <button type="submit" className="ma3 f6 fw6 ttu tracked pa2" onClick={onclick}>Add</button>
        </div>
    )
}

export default Submit;