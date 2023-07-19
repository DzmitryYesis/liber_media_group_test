import s from './LanguageSelect.module.scss'
import {useState} from 'react';
import {gb, fr, de, it, se} from '../../../assets/icon'

type LanguageSelectType = {
    language: string,
    img: string
}

const language: LanguageSelectType[] = [
    {
        language: 'English',
        img: gb
    },
    {
        language: 'French',
        img: fr
    },
    {
        language: 'Deutsch',
        img: de
    },
    {
        language: 'Italiano',
        img: it
    },
    {
        language: 'Svenska',
        img: se
    }]

export const LanguageSelect = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<LanguageSelectType>(language[0])

    const onMouseOverHandle = () => {
        setOpen(true)
    }

    const onMouseOutHandle = () => {
        setOpen(false)
    }

    const setLanguageHandle = (item: LanguageSelectType) => {
        setValue(item)
        setOpen(false)
    }

    return (
        <div className={s.container}>
            {
                open ? (

                    <div className={s.dropContainer} onMouseOut={onMouseOutHandle}
                         onMouseOver={onMouseOverHandle}>
                        <div className={s.currentLanguage}>
                            <img className={s.img} src={value.img} alt={'flag-country'}/>
                            <span className={s.languageTitle}>{value.language}</span>
                        </div>
                        <div className={s.dropList}>
                            {
                                language.filter(item => item.language !== value.language).map((item) => {
                                    return (
                                        <div className={s.dropItem} key={item.language}
                                             onClick={() => setLanguageHandle(item)}>
                                            <img className={s.img} src={item.img}
                                                 alt={'flag-country'}/>
                                            <span
                                                className={s.languageTitle}>{item.language}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ) : (
                    <div className={s.currentLanguage} onMouseOver={onMouseOverHandle}>
                        <img className={s.img} src={value.img} alt={'flag-country'}/>
                        <span className={s.languageTitle}>{value.language}</span>
                    </div>
                )}
        </div>
    )
}