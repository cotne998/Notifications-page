import "./index.css";

export default function Notifications({ notifications, setNotifications }) {
  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      } else {
        return notification;
      }
    });

    setNotifications(updatedNotifications);
  };

  const arr = [];

  notifications.map((notification) => {
    if (notification.isRead === false) {
      arr.push(notification);
    }
  });

  console.log(arr);

  return (
    <main>
      <header>
        <div className="notifications-info-div">
          <h2 className="header-title">Notifications</h2>
          <div className="amount">{arr.length}</div>
        </div>
        <button
          onClick={() =>
            setNotifications(
              notifications.map((notification) => ({
                ...notification,
                isRead: true,
              }))
            )
          }
          className="mark-all">
          Mark all as read
        </button>
      </header>
      {notifications.map((notification) => {
        return (
          <div
            onClick={() => markAsRead(notification.id)}
            key={notification.id}
            style={!notification.isRead ? { backgroundColor: "#F7FAFD" } : {}}
            className="notification">
            <div className="notification-upper-div">
              <div className="profile-picture-div">
                <img
                  className="profile-picture"
                  src={notification.profilePic}
                  alt=""
                />
              </div>
              <div className="notification-information-div">
                <div className="notification-wrap">
                  <p className="notification-information">
                    <span className="username">{notification.username}</span>
                    <span className="action">{notification.action}</span>
                    {notification.post ? (
                      <span className="post">{notification.post}</span>
                    ) : null}
                    {notification.groupName ? (
                      <span className="group-name">
                        {notification.groupName}
                      </span>
                    ) : null}
                    {!notification.isRead ? (
                      <div className="circle"></div>
                    ) : null}
                  </p>

                  {notification.userPicture ? (
                    <img
                      className="user-picture"
                      src={notification.userPicture}
                      alt="user picture"
                    />
                  ) : null}
                </div>
                <span className="time">{notification.time}</span>
                {notification.text ? (
                  <span className="notification-text">{notification.text}</span>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
