

import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-900 via-gray-900 to-black p-6">
      <div className="flex justify-center items-center h-full">
        <div
          className="
            w-full max-w-7xl
            h-[92vh]
            bg-base-100
            rounded-[32px]
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.5)]
            border border-base-300
          "
        >
          <div className="flex h-full">
            <Sidebar />
            {selectedUser ? <ChatContainer /> : <NoChatSelected />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;