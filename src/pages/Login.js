import 'assets/sass/styles.sass';
import NestedInput from 'components/forms/input';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { requestUser } from 'store/actions/actionsLogin';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const methods = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data) => {
        console.log('submitform');
        history.push('/');
        dispatch(requestUser(data));
    };

    return (
        <div className="login-container">
            <FormProvider {...methods}>
                <div className="form-vertical-alignment">
                    <NestedInput label={'User Email'} name={'email'} defaultValue={'admin'} />
                    <NestedInput label={'Password'} name={'password'} defaultValue={'admin'} />
                    <div
                        className="login-button"
                        role="button"
                        tabIndex={0}
                        onKeyDown={methods.handleSubmit(onSubmit)}
                        onClick={methods.handleSubmit(onSubmit)}>
                        Login
                    </div>
                </div>
            </FormProvider>
        </div>
    );
}
