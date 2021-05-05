import React from 'react';
import s from './User.module.css'
import * as axios from 'axios'
import userIcon from '../../assets/images/userIcon.png'


const Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                        <div className={s.userWrapper}>
                            <div className={s.userLeft}>
                                <div className={s.userPhotoName}>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userIcon}
                                             className={s.userPhoto}/>
                                    </div>
                                    <div className={s.userName}>
                                        {u.name}
                                    </div>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button className={s.userUnfollow} onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</button>
                                        : <button className={s.userFollow} onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>
                                    }
                                </div>

                            </div>
                            <div className={s.userRight}>
                                <div>
                                    <div className={s.userStatus}>{u.status}</div>
                                </div>
                                <div>
                                    <div className={s.userCity}>{"u.location.city"}</div>
                                    <div className={s.userCountry}>{"u.location.country"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;