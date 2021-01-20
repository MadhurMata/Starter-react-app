import 'assets/sass/styles.sass';
import PropTypes from 'prop-types';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function NestedInput(props) {
    const { register, errors } = useFormContext();

    return (
        <>
            <label className="form-label" htmlFor={props.label}>
                {props.label}:
                {errors[props.name] && errors[props.name].type === 'required' && (
                    <span className="form-error" role="alert">
                        This field is required
                    </span>
                )}
            </label>
            <input
                className="form-input"
                type="text"
                name={props.name}
                defaultValue={props.defaultValue}
                ref={register({ required: true })}
            />
        </>
    );
}

NestedInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.string
};
