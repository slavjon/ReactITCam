import React from 'react';
import poster from '../../../img/poster.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className="poster-img">
                <img src={poster} alt="Poster" />
            </div>
            <div className="Ava">
                ava + description ss
            </div>
        </div>
    );
}

export default ProfileInfo;