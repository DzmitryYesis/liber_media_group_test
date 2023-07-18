import s from './Footer.module.scss'
import twitter from '../../assets/icon/icons8-твиттер-24.svg'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.background}/>
            <div className={s.container}>
                <div className={s.navbar}>
                    <a className={s.link}>About Us</a>
                    <a className={s.link}>Contact Us</a>
                    <a className={s.link}>Login</a>
                </div>
                <div className={s.content}>
                    <div className={s.textBlock}>
                        <span className={s.text}>We operate with multiple 3rd parties and may pass your personal information not only to the firm described on the site, but also to other 3rd parties, including non-affiliated crypto-currency trading affiliates, and transfer or release your private data for marketing or business purposes. These third parties may use this data to contact you or to carry out their own business operations and purposes.</span>
                        <span className={s.text}>Key note on risk: Trading can produce large profits; however, it also involves the risk of losing some or all of the funds, and should be contemplated by the initial investors. Approximately 70% of investors will eventually lose money. Please read our terms and conditions and disclaimer page carefully before investing.</span>
                    </div>
                    <div className={s.contactBlock}>
                        <img className={s.twitter} src={twitter} alt={'twitter-img'}/>
                        <span className={s.phone}>+447418358115</span>
                    </div>
                </div>
                <div className={s.otherInfo}>
                    <div className={s.supportBlock}>
                        <div className={s.copyrightBlock}>
                            <span className={s.copyrightText}>Copyrights ©</span>
                            <span
                                className={s.copyrightText}>2022 All Rights Reserved.</span>
                        </div>
                        <span className={s.support}>support@biticodes.com</span>
                    </div>
                    <div className={s.addressBlock}>
                        <span className={s.addressText}>L.P.C Funnels PTE. LTD</span>
                        <span className={s.addressText}>Ang Mo Kio Avenue 5 #01-01, #01-07/11, #02-02/03 Singapore</span>
                    </div>
                    <div className={s.policyBlock}>
                        <span className={s.policyLink}>Privacy Policy</span>
                        <span className={s.policyLink}>Terms of Use</span>
                    </div>
                </div>
            </div>
        </div>
    )
}