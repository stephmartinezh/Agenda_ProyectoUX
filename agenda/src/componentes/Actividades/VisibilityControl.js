import React from 'react';

export const VisibilityControl = props => {
    return (
        <div>
            <input
                type="checkbox"
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />

            <label htmlFor="form-check-label">
                Mostar {props.description}
            </label>
        </div>
    )
}