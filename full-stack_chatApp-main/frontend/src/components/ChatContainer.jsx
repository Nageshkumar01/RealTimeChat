
import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col bg-slate-950">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative z-10 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <ChatHeader />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 relative z-10">
        <div className="space-y-6">
          {messages.map((message) => {
            const isMine = message.senderId === authUser._id;

            return (
              <div
                key={message._id}
                className={`flex ${
                  isMine ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-end gap-3 max-w-[80%] ${
                    isMine ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-white/10 shadow-lg flex-shrink-0">
                    <img
                      src={
                        isMine
                          ? authUser?.profilePic || "/avatar.png"
                          : selectedUser?.profilePic || "/avatar.png"
                      }
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Message Section */}
                  <div className="flex flex-col">
                    <div
                      className={`
                        px-4
                        py-3
                        rounded-2xl
                        shadow-lg
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:scale-[1.02]
                        ${
                          isMine
                            ? `
                              bg-gradient-to-r
                              from-purple-600
                              to-cyan-500
                              text-white
                              rounded-br-md
                            `
                            : `
                              bg-white/10
                              border
                              border-white/10
                              text-white
                              rounded-bl-md
                            `
                        }
                      `}
                    >
                      {message.image && (
                        <img
                          src={message.image}
                          alt="attachment"
                          className="rounded-xl mb-3 max-w-[250px] object-cover"
                        />
                      )}

                      {message.text && (
                        <p className="text-sm leading-relaxed break-words">
                          {message.text}
                        </p>
                      )}
                    </div>

                    {/* Timestamp */}
                    <span
                      className={`text-[11px] text-slate-400 mt-1 ${
                        isMine ? "text-right" : "text-left"
                      }`}
                    >
                      {formatMessageTime(message.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <div ref={messageEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="relative z-10 backdrop-blur-xl bg-black/20 border-t border-white/10">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatContainer;