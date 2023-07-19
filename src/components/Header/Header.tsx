import s from './Header.module.scss';

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.navbarContainer}>
                    <img
                        src={'https://biticodes.com/wp-content/uploads/2022/05/Biticodes-logo-blue-and-gray-1.png'}
                        alt={'bitiiplex-img'}/>
                    <div className={s.navbar}>
                        <span className={s.link}>ABOUT US</span>
                        <span className={s.link}>CONTACT US</span>
                        <span className={s.link}>LOGIN</span>
                    </div>
                </div>
            </div>
        </div>
    )
}