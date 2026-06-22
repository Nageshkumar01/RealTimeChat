
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Check, Send } from "lucide-react";

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 pt-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Appearance Settings
          </h1>

          <p className="text-slate-400 mt-2">
            Personalize your chat experience with beautiful themes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE - PHONE PREVIEW */}

          <div className="flex justify-center items-center">
            <div
              className="
                w-[320px]
                h-[650px]
                rounded-[40px]
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
                shadow-2xl
                p-4
              "
            >
              <div
                data-theme={theme}
                className="
                  h-full
                  rounded-[30px]
                  overflow-hidden
                  bg-base-100
                "
              >
                {/* Header */}
                <div className="bg-primary text-primary-content p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>

                    <div>
                      <h3 className="font-semibold">
                        John Doe
                      </h3>

                      <p className="text-xs opacity-70">
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 space-y-4 h-[480px]">
                  <div className="chat chat-start">
                    <div className="chat-bubble">
                      Hello 👋
                    </div>
                  </div>

                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-primary">
                      Hi! How are you?
                    </div>
                  </div>

                  <div className="chat chat-start">
                    <div className="chat-bubble">
                      Theme preview looks amazing!
                    </div>
                  </div>

                  <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-primary">
                      Yes, absolutely 🚀
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-base-300">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      placeholder="Message..."
                      className="input input-bordered flex-1"
                    />

                    <button className="btn btn-primary">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - THEMES */}

          <div>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Select Theme
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              {THEMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`
                    relative
                    p-4
                    rounded-2xl
                    transition-all
                    duration-300
                    border
                    ${
                      theme === t
                        ? "border-cyan-400 scale-105"
                        : "border-slate-700 hover:border-slate-500"
                    }
                    bg-slate-900
                  `}
                >
                  {/* Active Badge */}
                  {theme === t && (
                    <div
                      className="
                        absolute
                        top-3
                        right-3
                        w-6
                        h-6
                        rounded-full
                        bg-cyan-500
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Check size={14} />
                    </div>
                  )}

                  {/* Theme Preview */}
                  <div
                    data-theme={t}
                    className="rounded-xl overflow-hidden border border-base-300"
                  >
                    <div className="h-16 bg-base-200 p-2">
                      <div className="flex gap-1 h-full">
                        <div className="bg-primary flex-1 rounded"></div>
                        <div className="bg-secondary flex-1 rounded"></div>
                        <div className="bg-accent flex-1 rounded"></div>
                      </div>
                    </div>

                    <div className="bg-base-100 p-3">
                      <div className="h-2 rounded bg-primary mb-2"></div>
                      <div className="h-2 rounded bg-secondary w-2/3"></div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-medium text-white capitalize">
                    {t}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

