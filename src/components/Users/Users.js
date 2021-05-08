import React from "react";
import s from "./User.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {usersAPI} from "../../API/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.userList}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.userListItem}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <div className={s.userWrapper}>
                            <div className={s.userLeft}>
                                <NavLink to={'/profile/' + u.id}>
                                    <div className={s.userPhotoName}>
                                        <div>
                                            <img src={u.photos.small != null ? u.photos.small : userIcon}
                                                 className={s.userPhoto}/>
                                        </div>
                                        <div className={s.userName}>
                                            {u.name}
                                        </div>
                                    </div>
                                </NavLink>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.userUnfollow} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);

                                            usersAPI.unfollowUser(u.id).then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                props.toggleFollowingProgress(false, u.id);
                                                });

                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.userFollow} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);

                                            usersAPI.followUser(u.id).then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.follow(u.id)
                                                    }
                                                props.toggleFollowingProgress(false, u.id);
                                                });

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