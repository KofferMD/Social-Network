import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://stmedia.stimg.co/ows_ab52ed26-bbbc-4eb2-885f-5a8d103c88f2.jpg?fit=crop&crop=faces" alt="" />
            </div>

            <div>
                avatar+descr
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;