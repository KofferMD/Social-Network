import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Логин'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field type="text" placeholder={'Пароль'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type="checkbox" component={'input'} name={'rememberMe'} /> запомнить меня
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Войти</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;