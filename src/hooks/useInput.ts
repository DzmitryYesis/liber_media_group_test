import {ChangeEvent, SyntheticEvent, useState} from 'react';

type TValidation = (arg0: string) => boolean | string;

export function useInput(validate: TValidation) {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onChangeText = (event: SyntheticEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        setValue(target.value);
        setError(false);
        setErrorMessage('');
    };

    const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value.replace(/\s+/gi, ''));
        setError(false);
        setErrorMessage('');
    };

    const onFocus = () => setIsFocused(true);

    const onBlur = () => {
        setIsFocused(false);
        if (!value) return;
        const validationResult = validate(value);

        if (typeof validationResult === "string") {
            setError(true);
            setErrorMessage(validationResult);
        } else {
            setError(false);
            setErrorMessage("");
        }
    };

    return {
        value,
        isFocused,
        error,
        errorMessage,
        onChangeText,
        onChangePhone,
        onFocus,
        onBlur,
        setError,
        setErrorMessage,
        setValue
    };
}
