import s from './Header.module.scss';
import {LanguageSelect} from './LanguageSelect/LanguageSelect';
import {Registration} from '../Registration/Registration';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.navbarContainer}>
                    <img className={s.img}
                         src={'https://biticodes.com/wp-content/uploads/2022/05/Biticodes-logo-blue-and-gray-1.png'}
                         alt={'bitiiplex-img'}/>
                    <div className={s.navbar}>
                        <span className={s.link}>ABOUT US</span>
                        <span className={s.link}>CONTACT US</span>
                        <span className={s.link}>LOGIN</span>
                        <LanguageSelect/>
                    </div>
                </div>
                <div className={s.titleBlock}>
                    <span className={s.title}>Biticodes & BTC iPlex Pro App - AI </span>
                    <span className={s.title}>powered crypto trading bot for</span>
                    <span className={s.title}>beginners & advance traders alike.</span>
                </div>
                <Registration/>
            </div>
        </div>
    )
}