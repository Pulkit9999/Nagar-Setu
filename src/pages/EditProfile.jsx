import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../layouts/MainLayout";
import "../css/EditProfile.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import Sidebar from "../components/SideBar";
import { toast } from "react-toastify";
import { stateMasterData } from "../data/statesMasterData";
import { districtMasterData } from "../data/districtsMasterData";

const EditProfile = () => {
  const { register, watch, reset, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const selectedState = watch("state");
 
  useEffect(() => {
  const auth = getAuth();

  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) return;

    try {
      const docRef = doc(db, "users", currentUser.uid);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();

        reset({
          name: userData.name || "",
          email: userData.email || "",
          mobile: userData.mobile || "",
          gender: userData.gender || "",
          state: userData.state || "",
          district: userData.district || "",
          address: userData.address || "",
          pincode: userData.pincode || "",
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  });

  return () => unsubscribe();
}, [reset]);

 
  const updateProfile = async (data) => {
    try {
      setLoading(true);

      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        toast.error("User not found.");
        return;
      }

      const docRef = doc(db, "users", currentUser.uid);

      await updateDoc(docRef, {
        name: data.name,
        gender: data.gender,
        state: data.state,
        district: data.district,
        address: data.address,
        pincode: data.pincode,
      });

      toast.success("Profile updated successfully!", {
        position: "bottom-center",
        autoClose: 2500,
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to update profile.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <MainLayout>
         <div className="lodge-grievance-layout">
               <Sidebar />
      <div className="edit-profile-page">
        <div className="edit-profile-container">
          <h2 className="edit-profile-heading">Edit Profile</h2>
          <form onSubmit={handleSubmit(updateProfile)}>
            <div className="edit-profile-grid">
              {/* Full Name */}
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("name")}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email Address (Cannot edit Email)</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  {...register("email")}
                  readOnly
                />
              </div>

              {/* Mobile */}
              <div className="form-group">
                <label>Mobile Number (Cannot edit mobile number)</label>
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  {...register("mobile")}
                  readOnly
                />
              </div>

              {/* Gender */}
              <div className="form-group">
                <label>Gender</label>
                <select {...register("gender")}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* State */}
              <div className="form-group">
                <label>State</label>

                <select {...register("state")}>
                  <option value="">Select State</option>

                  {stateMasterData.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* District */}
              <div className="form-group">
                <label>District</label>

                <select {...register("district")} disabled={!selectedState}>
                  <option value="">
                    {selectedState ? "Select District" : "Select State First"}
                  </option>

                  {selectedState &&
                    districtMasterData[selectedState]?.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                </select>
              </div>

              {/* Address */}
              <div className="form-group full-width">
                <label>Address</label>

                <textarea
                  rows="4"
                  placeholder="Enter Address"
                  {...register("address")}
                ></textarea>
              </div>

              {/* Pincode */}
              <div className="form-group">
                <label>Pincode</label>

                <input
                  type="text"
                  placeholder="Enter Pincode"
                  {...register("pincode")}
                />
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="update-btn" disabled={loading}>
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </MainLayout>
  );
};

export default EditProfile;
