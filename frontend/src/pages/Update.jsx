import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Logout } from "../icons/Logout";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const { user, logout } = useAuth();
  const { userId } = useParams()
  const navigate = useNavigate()

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#001F3F] to-[#3b9aff]">
      <div className="bg-white rounded-xl shadow-lg text-center max-w-xl w-full border-3 border-blue-600">
        <div className="flex items-center bg-blue-600 rounded-t-lg p-3 justify-between">
          <p className="text-3xl flex text-white">Profile</p>
          <button
            className="flex gap-5 text-2xl px-6 bg-white items-center"
            onClick={() => logout()}
          >
            Logout
            <Logout />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-5 space-y-5">
          <div className="mx-auto flex gap-10 text-xl">
            <div className="flex flex-col items-start font-bold text-blue-600 space-y-3">
              <p>Username:</p>
              <p>Email:</p>
              <p>Number:</p>
            </div>
            <div className="space-y-3">
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.number}</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex mx-auto gap-10 w-[80%]">
              <button onClick={()=>navigate(-1)} className="bg-gray-400 w-1/2 hover:bg-gray-700 text-white font-semibold  transition duration-300">
                cancel
              </button>
              <button className="bg-blue-600 w-1/2 hover:bg-blue-700 text-white font-semibold  transition duration-300">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
