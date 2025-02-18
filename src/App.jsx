import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Notifications from "./components/Notifications/Notifications";
import "./index.css";

function App() {
  const [notifications, setNotifications] = useState(data);

  return (
    <>
      <Notifications
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </>
  );
}

export default App;
