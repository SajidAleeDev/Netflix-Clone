import React from "react";
import Nav from "../HomeScreen/HomeComponent/Nav/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../Feature/userReducer";
import { Button } from "@mui/material";
import { auth } from "../Firebase";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="h-screen text-white">
      <Nav />
      <div className="flex flex-col w-[50%] mx-auto pt-[8%] max-w-[800px]">
        <h1 className="text-[60px] font-normal border-b-[1px] border-[#282c2d] mb-[20px]">
          Edit Profile
        </h1>
        <div className="flex">
          <img
            className="h-[100px]"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="text-white ml-[25px] flex-1">
            <h2 className="bg-gray-500 p-[15px] text-[15px] ml-[20px] ">
              {user.email}
            </h2>

            <div className="ml-[25px] mt-[20px]">
              <Button
                fullWidth
                sx={{
                  p: "10px 20px",
                  fontSize: "1rem",
                  mt: "5%",
                  bgcolor: "#e50914",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#e50914",
                    color: "#fff",
                  },
                  fontWeight: "bold",
                }}
                onClick={() => auth.signOut()}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
