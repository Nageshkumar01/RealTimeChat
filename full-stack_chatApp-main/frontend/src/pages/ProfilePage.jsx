

import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, ShieldCheck, Calendar } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        <div
          className="
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            rounded-3xl
            overflow-hidden
            shadow-2xl
          "
        >
          {/* Cover Section */}
          <div className="h-48 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500"></div>

          {/* Main Content */}
          <div className="px-8 pb-10">
            {/* Profile Image */}
            <div className="flex flex-col items-center -mt-20">
              <div className="relative">
                <img
                  src={selectedImg || authUser?.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="
                    w-40 h-40
                    rounded-full
                    object-cover
                    border-4 border-slate-900
                    shadow-2xl
                  "
                />

                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-2 right-2
                    bg-gradient-to-r
                    from-purple-600
                    to-cyan-500
                    p-3
                    rounded-full
                    cursor-pointer
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-lg
                    ${
                      isUpdatingProfile
                        ? "pointer-events-none animate-pulse"
                        : ""
                    }
                  `}
                >
                  <Camera className="w-5 h-5 text-white" />

                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>

              <h1 className="text-4xl font-bold text-white mt-6">
                {authUser?.fullName}
              </h1>

              <p className="text-slate-400 mt-2">
                {authUser?.email}
              </p>

              <p className="text-sm text-slate-500 mt-3">
                {isUpdatingProfile
                  ? "Uploading profile picture..."
                  : "Click the camera icon to update your profile picture"}
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* Personal Information */}
              <div
                className="
                  bg-slate-800/50
                  border border-slate-700
                  rounded-2xl
                  p-6
                "
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  Personal Information
                </h2>

                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <User size={16} />
                      Full Name
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 text-white">
                      {authUser?.fullName}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <Mail size={16} />
                      Email Address
                    </div>

                    <div className="bg-slate-900 rounded-xl p-4 text-white">
                      {authUser?.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Information */}
              <div
                className="
                  bg-slate-800/50
                  border border-slate-700
                  rounded-2xl
                  p-6
                "
              >
                <h2 className="text-xl font-semibold text-white mb-6">
                  Account Information
                </h2>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar size={16} />
                      Member Since
                    </div>

                    <span className="text-white">
                      {authUser?.createdAt?.split("T")[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400">
                      <ShieldCheck size={16} />
                      Status
                    </div>

                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        bg-green-500/20
                        text-green-400
                        text-sm
                        font-medium
                      "
                    >
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">
                      Profile Completion
                    </span>

                    <span className="text-cyan-400 font-semibold">
                      100%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div
              className="
                mt-8
                rounded-2xl
                bg-gradient-to-r
                from-purple-600/20
                to-cyan-500/20
                border border-white/10
                p-6
                text-center
              "
            >
              <h3 className="text-white text-lg font-semibold">
                Your account is fully active 🚀
              </h3>

              <p className="text-slate-400 mt-2">
                Keep your profile updated and enjoy seamless conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

