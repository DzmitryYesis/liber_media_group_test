import s from './TextInput.module.scss'
import {SyntheticEvent} from 'react';
import cn from 'classnames'

type TextInputPropsType = {
    phoneNumber?: boolean
    value: string,
    onChange: (event: SyntheticEvent<HTMLInputElement>) => void
    placeholder: string,
    error: boolean,
    errorMessage: string
    onBlur: VoidFunction
}

export const TextInput = ({
                              value,
                              placeholder,
                              onChange,
                              error,
                              errorMessage,
                              onBlur,
                              phoneNumber = false
                          }: TextInputPropsType) => {
    return (
        <div className={cn(s.container, {
            [s.container_phone]: phoneNumber
        })}>
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
                error && (
                    <span className={s.errorMessage}>{errorMessage}</span>
                )
            }
        </div>
    )
}