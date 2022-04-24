import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/3403845/pub_60d2e9de68a7aa40c2fc262e_60d2f399d6f4ab7d154dfa30/scale_1200" />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
