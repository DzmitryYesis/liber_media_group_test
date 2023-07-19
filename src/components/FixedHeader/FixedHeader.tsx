import s from './FixedHeader.module.scss'
import {Timer} from './Timer/Timer';

export const FixedHeader = () => {

    return (
        <div className={s.container}>
            <div className={s.content}>
                <Timer minutes={7} seconds={12}/>
                <span className={s.timer}>TIME LEFT FOR LAST REGISTRATIONS</span>
            </div>
        </div>
    )
}