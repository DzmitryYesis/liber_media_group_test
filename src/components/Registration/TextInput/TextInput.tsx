import s from './TextInput.module.scss'
import {SyntheticEvent} from 'react';
import cn from 'classnames'
import correctValue from '../../../assets/icon/icons8-галочка-48.png'

type TextInputPropsType = {
    phoneNumber?: boolean
    value: string,
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void
    placeholder: string,
    error: boolean,
    errorMessage: string
    onBlur: VoidFunction
    isValid: boolean
}

export const TextInput = ({
                              value,
                              placeholder,
                              onChange,
                              error,
                              errorMessage,
                              onBlur,
                              isValid,
                              phoneNumber = false
                          }: TextInputPropsType) => {
    return (
        <div className={cn(s.container, {
            [s.container_phone]: phoneNumber
        })}>
            <div>
                <input
                    className={cn(s.input, {
                        [s.input_correct]: !!value && !error,
                        [s.input_error]: error,
                        [s.input_phone]: phoneNumber,
                    })}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {
                    isValid && (
                        <div className={s.correct}>
                            <img className={s.img} src={correctValue} alt={'correct'}/>
                        </div>
                    )
                }
            </div>
            {
                error && (
                    <span className={s.errorMessage}>{errorMessage}</span>
                )
            }
        </div>
    )
}