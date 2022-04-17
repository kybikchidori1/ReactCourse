import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <div>
      <img src="https://avatars.mds.yandex.net/get-zen_doc/3403845/pub_60d2e9de68a7aa40c2fc262e_60d2f399d6f4ab7d154dfa30/scale_1200" />
    </div>
    <div>ava + description</div>
    <div>
      My posts
      <div>New Post</div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  </div>
}

export default Profile;