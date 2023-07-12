import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="dd6da26b-04c4-4599-aa6d-d61381f37015"
      userName="TUT01"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
