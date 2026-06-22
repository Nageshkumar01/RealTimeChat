

import { X, Phone, Video } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="backdrop-blur-xl bg-black/20 border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
                className="w-full h-full object-cover"
              />
            </div>

            <span
              className={`
                absolute
                bottom-0
                right-0
                w-3.5
                h-3.5
                rounded-full
                border-2
                border-slate-900
                ${isOnline ? "bg-green-500" : "bg-gray-500"}
              `}
            />
          </div>

          {/* User Details */}
          <div>
            <h2 className="text-white font-semibold text-lg">
              {selectedUser.fullName}
            </h2>

            <p
              className={`text-sm ${
                isOnline ? "text-green-400" : "text-slate-400"
              }`}
            >
              {isOnline ? "Active now" : "Last seen recently"}
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">

          {/* Call Button */}
          <button
            className="
              p-2.5
              rounded-xl
              bg-white/5
              hover:bg-white/10
              transition-all
            "
          >
            <Phone size={18} className="text-slate-300" />
          </button>

          {/* Video Button */}
          <button
            className="
              p-2.5
              rounded-xl
              bg-white/5
              hover:bg-white/10
              transition-all
            "
          >
            <Video size={18} className="text-slate-300" />
          </button>

          {/* Close Button */}
          <button
            onClick={() => setSelectedUser(null)}
            className="
              p-2.5
              rounded-xl
              bg-red-500/10
              hover:bg-red-500/20
              transition-all
            "
          >
            <X size={20} className="text-red-400" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

