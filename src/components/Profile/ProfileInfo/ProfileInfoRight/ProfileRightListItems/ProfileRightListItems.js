import React from 'react';
import s from "./ProfileRightListItem.module.css";
import Additional from "./Additional/Additional";

const ProfileRightListItems =(props) => {

    let additionalElements = props.additional.map(a => <Additional number={a.number} descr={a.descr} key={a.id} />)

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