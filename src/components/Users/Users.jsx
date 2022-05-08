/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0)
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://pm1.narvii.com/7225/b9616f570c396754f57d261b1fc2429482d7c3b3r1-1080-1109v2_hq.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "I am a boss",
        locations: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://pm1.narvii.com/7225/b9616f570c396754f57d261b1fc2429482d7c3b3r1-1080-1109v2_hq.jpg",
        followed: true,
        fullName: "Poshlivbli",
        status: "I am a boss too",
        locations: { city: "Moscow", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://pm1.narvii.com/7225/b9616f570c396754f57d261b1fc2429482d7c3b3r1-1080-1109v2_hq.jpg",
        followed: false,
        fullName: "Andrew",
        status: "I am a boss too x2",
        locations: { city: "Kiev", country: "Ukraine" },
      },
    ]);

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.locations.country}</div>
            <div>{u.locations.city}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
