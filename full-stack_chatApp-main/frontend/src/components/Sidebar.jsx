


import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const {
    getUsers,
    users,
    selectedUser,
    setSelectedUser,
    isUsersLoading,
  } = useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((u) => onlineUsers.includes(u._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside
      className="
        w-20 lg:w-72
        h-full
        flex flex-col
        border-r border-white/10
        bg-black/20
        backdrop-blur-xl
      "
    >
      {/* Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white/5">
            <Users className="w-5 h-5 text-cyan-400" />
          </div>

          <h2 className="hidden lg:block text-white font-semibold text-lg">
            Contacts
          </h2>
        </div>

        {/* Online toggle */}
        <div className="mt-4 hidden lg:flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="accent-cyan-500 w-4 h-4"
            />
            <span className="text-sm text-slate-300">
              Online only
            </span>
          </label>

          <span className="text-xs text-slate-400">
            {onlineUsers.length} active
          </span>
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2">

        {filteredUsers.map((user) => {
          const isOnline = onlineUsers.includes(user._id);
          const isActive = selectedUser?._id === user._id;

          return (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
                w-full
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                transition-all
                duration-200
                hover:bg-white/10
                ${isActive ? "bg-white/10" : ""}
              `}
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="
                    w-11 h-11
                    rounded-full
                    object-cover
                    border border-white/10
                  "
                />

                {/* Online dot */}
                <span
                  className={`
                    absolute
                    bottom-0
                    right-0
                    w-3
                    h-3
                    rounded-full
                    border-2
                    border-black
                    ${isOnline ? "bg-green-500" : "bg-gray-500"}
                  `}
                />
              </div>

              {/* Info */}
              <div className="hidden lg:block text-left min-w-0">
                <p className="text-white font-medium truncate">
                  {user.fullName}
                </p>

                <p
                  className={`text-xs ${
                    isOnline
                      ? "text-green-400"
                      : "text-slate-500"
                  }`}
                >
                  {isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </button>
          );
        })}

        {/* Empty state */}
        {filteredUsers.length === 0 && (
          <div className="text-center text-slate-500 mt-6 text-sm">
            No users found
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;