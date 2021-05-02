import React from 'react';
import s from "../../ProfileInfo.module.css";
import Additional from "../Additional/Additional";

const ProfileRightListItems =(props) => {
    debugger
    let additionalElements = props.additional.additional.map(a => <Additional number={a.number} descr={a.descr} />)

    return (
        <div className={s.ProfileRightListItems}>
            <div className={s.ProfileRightList}>
                <ul className={s.ProfileRightList}>
                    {additionalElements}
                </ul>
            </div>
        </div>
    )
}

export default ProfileRightListItems;