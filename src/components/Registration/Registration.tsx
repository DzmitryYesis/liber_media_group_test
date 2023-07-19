import s from './Registration.module.scss'
import {TextInput} from './TextInput/TextInput';
import {useInput} from '../../hooks/useInput';
import {getValidation} from '../../utils/getValidation';
import {au, gb, ca} from '../../assets/icon/index';
import {PhoneSelect} from './PhoneSelect/PhoneSelect';
import {useState} from 'react';
import {Country, PhoneExample} from './enum';

export type PhoneSelectType = {
    code: string,
    img: string
    country: string
    placeholder: string
}

const phoneCodes: PhoneSelectType[] = [
    {
        code: '+44',
        img: gb,
        country: Country.UNITED_KINGDOM,
        placeholder: PhoneExample.UNITED_KINGDOM
    },
    {
        code: '+43',
        img: au,
        country: Country.AUSTRIA,
        placeholder: PhoneExample.AUSTRIA
    },
    {
        code: '+1',
        img: ca,
        country: Country.CANADA,
        placeholder: PhoneExample.CANADA
    }]

export const Registration = () => {

    const [currentCode, setCurrentCode] = useState<PhoneSelectType>(phoneCodes[0])

    const firstNameValidate = getValidation().personalDataName.validate
    const lastNameValidate = getValidation().personalDataName.validate
    const emailValidate = getValidation().emailValidation.validate


    const phoneValidation = getValidation(currentCode.country).phoneValidation.validate

    const {
        value: firstNameValue,
        onChangeText: firstNameOnChangeText,
        error: firstNameError,
        errorMessage: firstNameErrorMessage,
        onBlur: firstNameOnBlur
    } = useInput(firstNameValidate)

    const {
        value: lastNameValue,
        onChangeText: lastNameOnChangeText,
        error: lastNameError,
        errorMessage: lastNameErrorMessage,
        onBlur: lastNameOnBlur
    } = useInput(lastNameValidate)

    const {
        value: emailValue,
        onChangeText: emailOnChangeText,
        error: emailError,
        errorMessage: emailErrorMessage,
        onBlur: emailOnBlur
    } = useInput(emailValidate)

    const {
        value: phoneValue,
        onChangeText: phoneOnChangeText,
        error: phoneError,
        errorMessage: phoneErrorMessage,
        onBlur: phoneOnBlur
    } = useInput(phoneValidation)


    const currentCodeHandler = (item: PhoneSelectType) => {
        setCurrentCode(item)
    }

    return (
        <div className={s.container}>
            <TextInput
                value={firstNameValue}
                onChange={firstNameOnChangeText}
                onBlur={firstNameOnBlur}
                error={firstNameError}
                errorMessage={firstNameErrorMessage}
                placeholder={'First Name'}/>
            <TextInput
                value={lastNameValue}
                onChange={lastNameOnChangeText}
                onBlur={lastNameOnBlur}
                error={lastNameError}
                errorMessage={lastNameErrorMessage}
                placeholder={'Last Name'}/>
            <TextInput
                value={emailValue}
                onChange={emailOnChangeText}
                onBlur={emailOnBlur}
                error={emailError}
                errorMessage={emailErrorMessage}
                placeholder={'Email'}/>
            <div className={s.phoneContainer}>
                <PhoneSelect
                    listOfValue={phoneCodes}
                    currentValue={currentCode}
                    onChange={currentCodeHandler}/>
                <TextInput
                    value={phoneValue}
                    onChange={phoneOnChangeText}
                    placeholder={currentCode.placeholder}
                    error={phoneError}
                    errorMessage={phoneErrorMessage}
                    onBlur={phoneOnBlur}
                    phoneNumber={true}/>
            </div>
        </div>
    )
}