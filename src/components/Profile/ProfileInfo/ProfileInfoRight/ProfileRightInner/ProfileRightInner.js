import React from 'react';
import s from "./ProfileRightInner.module.css";
import Info from "./Info/Info";
import ProfileRightTop from "./ProfileRightTop/ProfileRightTop";


const ProfileRightInner =(props) => {
    let infoElements = props.info.map(i => <Info title={i.title} descr={i.descr} />);

    return (
        <div className={s.ProfileRightInner}>
            <ProfileRightTop />
            <div className={s.infoElements}>
                {infoElements}
            </div>
            <div className={s.divider}></div>
            <div className={s.divider1}></div>
            <div className={s.divider2}></div>

        </div>
    )
}

export default ProfileRightInner;