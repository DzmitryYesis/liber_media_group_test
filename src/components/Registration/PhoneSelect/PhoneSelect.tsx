import {useState} from 'react';
import s from './PhoneSelect.module.scss';
import {PhoneSelectType} from '../Registration';

type PhoneSelectPropsType = {
    listOfValue: PhoneSelectType[]
    currentValue: PhoneSelectType
    onChange: (item: PhoneSelectType) => void
}

export const PhoneSelect = ({
                                currentValue,
                                listOfValue,
                                onChange
                            }: PhoneSelectPropsType) => {

    const [open, setOpen] = useState(false)

    const selectHandle = () => {
        setOpen(!open)
    }

    const setCodeHandle = (item: PhoneSelectType) => {
        onChange(item)
        setOpen(false)
    }

    return (
        <div className={s.container}>
            {
                open ? (
                    <div className={s.dropContainer} onClick={selectHandle}>
                        <div className={s.currentCountry}>
                            <img className={s.img} src={currentValue.img}
                                 alt={'flag-country'}/>
                            <span className={s.countryCode}>{currentValue.code}</span>
                        </div>
                        <div className={s.dropList}>
                            {
                                listOfValue.filter(item => item.code !== currentValue.code).map((item) => {
                                    return (
                                        <div className={s.dropItem} key={item.code}
                                             onClick={() => setCodeHandle(item)}>
                                            <img className={s.img} src={item.img}
                                                 alt={'flag-country'}/>
                                            <span
                                                className={s.country}>{item.country}</span>
                                            <span
                                                className={s.countryCode_open}>{item.code}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <div className={s.currentCountry} onClick={selectHandle}>
                        <img className={s.img} src={currentValue.img}
                             alt={'flag-country'}/>
                        <span className={s.countryCode}>{currentValue.code}</span>
                    </div>
                )}
        </div>
    )
}