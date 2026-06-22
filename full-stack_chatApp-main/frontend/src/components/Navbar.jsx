

import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import {
  LogOut,
  MessageCircle,
  Settings,
  User,
} from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-black/40
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-18 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
              group
            "
          >
            <div
              className="
                w-11
                h-11
                rounded-2xl
                bg-gradient-to-r
                from-purple-600
                to-cyan-500
                flex
                items-center
                justify-center
                shadow-lg
                group-hover:scale-105
                transition-all
              "
            >
              <MessageCircle
                className="w-6 h-6 text-white"
              />
            </div>

            <div>
              <h1
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                ChatSphere
              </h1>

              <p
                className="
                  text-xs
                  text-slate-400
                  hidden
                  md:block
                "
              >
                Real-time Messaging
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-3">

            <Link
              to="/settings"
              className="
                px-4
                py-2
                rounded-xl
                bg-white/5
                hover:bg-white/10
                border
                border-white/10
                flex
                items-center
                gap-2
                transition-all
              "
            >
              <Settings size={18} />
              <span className="hidden md:block">
                Settings
              </span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-white/5
                    hover:bg-white/10
                    border
                    border-white/10
                    flex
                    items-center
                    gap-2
                    transition-all
                  "
                >
                  <User size={18} />
                  <span className="hidden md:block">
                    Profile
                  </span>
                </Link>

                <button
                  onClick={logout}
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-red-500/10
                    hover:bg-red-500/20
                    border
                    border-red-500/20
                    text-red-400
                    flex
                    items-center
                    gap-2
                    transition-all
                  "
                >
                  <LogOut size={18} />
                  <span className="hidden md:block">
                    Logout
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;