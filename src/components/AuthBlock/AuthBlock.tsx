import { useRef } from 'react';
import {authUser} from '../../store/authSlice'
import './AuthBlock.css'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

function AuthBlock() {

    const dispatch = useDispatch<AppDispatch>();

    const emailRef:React.MutableRefObject<any> = useRef()
    const passwordlRef:React.MutableRefObject<any> = useRef()

    const getAuth =() => {
        dispatch(authUser({
            username: emailRef.current.value,
            password: passwordlRef.current.value
        }))

        emailRef.current.value = ""
        passwordlRef.current.value = ""
    }

    return (
        <div className="auth_block">
            <h1 className="auth_title">Авторизация</h1>
            <div className="auth_info">
                <div className="auth_info_block">
                    <p className="auth_info_title">Ваша почта:</p>
                    <input ref={emailRef} type="text" className='auth_input auth_info_title' placeholder='Введите вашу почту'/>
                </div>
                <div className="auth_info_block">
                    <p className="auth_info_title">Пароль:</p>
                    <input ref={passwordlRef} type="text" className='auth_input auth_info_title' placeholder='Введите ваш пароль'/>
                </div>
            </div>
            <button className='auth_btn' onClick={getAuth}>
                <span className='auth_info_title'>Войти</span>
            </button>
            <a href="#" className="auth_link auth_info_title">Забыли пароль?</a>
        </div>
    )
}

export default AuthBlock