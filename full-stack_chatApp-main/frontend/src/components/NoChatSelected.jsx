

import { MessageSquare, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div
        className="
          relative
          z-10
          max-w-lg
          text-center
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-10
          shadow-2xl
        "
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="
              relative
              w-24
              h-24
              rounded-3xl
              bg-gradient-to-r
              from-purple-600
              to-cyan-500
              flex
              items-center
              justify-center
              shadow-xl
              animate-pulse
            "
          >
            <MessageSquare className="w-12 h-12 text-white" />

            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to ChatSphere
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg leading-relaxed">
          Select a conversation from the sidebar and start
          messaging instantly with your friends and team.
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-cyan-400 font-semibold">⚡</p>
            <p className="text-xs text-slate-400 mt-1">
              Fast Messaging
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-purple-400 font-semibold">🔒</p>
            <p className="text-xs text-slate-400 mt-1">
              Secure Chats
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-green-400 font-semibold">🌎</p>
            <p className="text-xs text-slate-400 mt-1">
              Real-Time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;