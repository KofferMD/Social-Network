import React from 'react';
import s from './Info.module.css';
import vk from './../../../../../../assets/images/social/icons8-vk.com.svg'
import instagram from './../../../../../../assets/images/social/icons8-instagram-old.svg'
import facebook from './../../../../../../assets/images/social/icons8-facebook-circled.svg'
import git from './../../../../../../assets/images/social/icons8-github.svg'

const Info = (props) => {
    return (
        <div className={s.ProfileRightInfoItem}>
            <div className={s.ProfileRightTitle}>{props.title}</div>

            <div className={s.ProfileInfoDescr}>{props.profile.aboutMe}</div>

            <div className={s.ProfileRightTitle}>{props.social}</div>

            <ul className={s.ProfileInfoList}>
                <li className={s.ProfileInfoItem}>
                    <a className={s.ProfileInfoVk} href={props.profile.contacts.vk} target={props.profile.contacts.vk}>
                        <img src={vk} alt=""/>
                    </a>
                </li>
                <li className={s.ProfileInfoItem}>
                    <a className={s.ProfileInfoInstagram} href={props.profile.contacts.facebook} target={props.profile.contacts.facebook}>
                        <img src={facebook} alt=""/>
                    </a>
                </li>
                <li className={s.ProfileInfoItem}>
                    <a className={s.ProfileInfoFaceBook} href={props.profile.contacts.instagram} target={props.profile.contacts.instagram}>
                        <img src={instagram} alt=""/>
                    </a>
                </li>
                <li className={s.ProfileInfoItem}>
                    <a className={s.ProfileInfoVk} href={props.profile.contacts.github} target={props.profile.contacts.github}>
                        <img src={git} alt=""/>
                    </a>
                </li>
            </ul>
            <div></div>
        </div>
    )
}

export default Info;