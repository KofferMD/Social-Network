import React from 'react';
import s from "../../ProfileInfo.module.css";
import Info from "./Info/Info";
import ProfileRightTop from "./ProfileRightTop/ProfileRightTop";


const ProfileRightInner =(props) => {
    debugger
    let infoElements = props.info.info.map(i => <Info title={i.title} descr={i.descr} />);

    return (
        <div className={s.ProfileRightInner}>
            <ProfileRightTop />
            {infoElements}
            <div className={s.divider}></div>
            <div className={s.divider1}></div>
            <div className={s.divider2}></div>
        </div>
    )
}

export default ProfileRightInner;