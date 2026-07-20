import MainLayout from "../layouts/MainLayout";
import "../css/RegisterUser.css";
import { stateMasterData } from "../data/statesMasterData";
import { useForm } from "react-hook-form";
import { districtMasterData } from "../data/districtsMasterData";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import i18n from "../localizations/i18n";
import { useNavigate } from "react-router-dom";
const RegisterUser = () => {
  const {t}  = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: data.name,

        gender: data.gender,

        mobile: data.mobileNumber,

        address: data.address,

        state: data.state,

        district: data.district,

        locality: data.locality || "",

        subLocality: data.subLocality || "",

        pincode: data.pincode || "",

        email: data.email,
      });
      // Firebase automatically logs in the newly registered user.
      // Logout the user before redirecting to login page.
      sessionStorage.setItem("justRegistered", "true");
      await signOut(auth);
      toast.success(`${t("registrationSuccessful")} 🎉`);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const selectedState = watch("state");
  const districts = selectedState
    ? districtMasterData[selectedState] || []
    : [];

  return (
    <MainLayout showSessionTimer={false}>
      <div>
        <div className="registration-heading">
          <h1>{t("registrationSignUpForm")}</h1>
        </div>

        <div className="enter-details-header">
          <h1 className="details-header"> {t("enterYourDetails")}</h1>
          <p className="details-para">{t("mandatoryFields")}</p>
        </div>

        <div className="main-grid-container">
          <div className="left-section">
            <div className="form-group">
              <label className="form-label">
                {t("fullName")}
                <span className="asterisk-color">*</span>
              </label>

              <input
                type="text"
                className="form-input"
                placeholder="Enter Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />

              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("address")}
                <span className="asterisk-color">*</span>
              </label>

              <textarea
                rows="4"
                className="form-input"
                placeholder="Enter Address"
                {...register("address", {
                  required: "Address is required",
                })}
              />

              {errors.address && (
                <p className="error-message">{errors.address.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">{t("locality")}</label>

              <input
                type="text"
                className="form-input"
                placeholder="Enter Locality"
                {...register("locality")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("state")} <span className="asterisk-color">*</span>
              </label>

              <select
                className="form-input"
                {...register("state", {
                  required: "State is required",
                })}
              >
                <option value="">Select State</option>

                {stateMasterData.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              {errors.state && (
                <p className="error-message">{errors.state.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">{t("pincode")}</label>

              <input
                type="text"
                className="form-input"
                placeholder="Enter Pincode"
                {...register("pincode", {
                  pattern: {
                    value: /^[1-9][0-9]{5}$/,
                    message: "Enter valid pincode",
                  },
                })}
              />

              {errors.pincode && (
                <p className="error-message">{errors.pincode.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("password")}
                <span className="asterisk-color"> *</span>
              </label>

              <input
                type="password"
                className="form-input"
                placeholder="Enter Password"
                {...register("password", {
                  required: "Pssword is required",
                })}
              />

              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div className="right-section">
            <div className="form-group">
              <label className="form-label">
                {t("gender")} <span className="asterisk-color">*</span>
              </label>

              <select
                className="form-input"
                {...register("gender", {
                  required: "Gender is required",
                })}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              {errors.gender && (
                <p className="error-message">{errors.gender.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">{t("subLocality")}</label>

              <input
                type="text"
                className="form-input"
                placeholder="Enter Sub Locality"
                {...register("subLocality")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("country")} <span className="asterisk-color">*</span>
              </label>

              <input
                type="text"
                className="form-input"
                value="India"
                readOnly
                {...register("country")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("district")} <span className="asterisk-color">*</span>
              </label>

              <select
                className="form-input"
                disabled={!selectedState}
                {...register("district", {
                  required: "District is required",
                })}
              >
                <option value="">
                  {selectedState ? "Select District" : "Select State First"}
                </option>

                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              {errors.district && (
                <p className="error-message">{errors.district.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("mobileNumber")}
                <span className="asterisk-color">*</span>
              </label>

              <input
                type="text"
                className="form-input"
                placeholder="Enter Mobile Number"
                {...register("mobileNumber", {
                  required: "Mobile Number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter valid mobile number",
                  },
                })}
              />

              {errors.mobileNumber && (
                <p className="error-message">{errors.mobileNumber.message}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                {t("emailAddress")} <span className="asterisk-color">*</span>
              </label>

              <input
                type="email"
                className="form-input"
                placeholder="Enter Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email address",
                  },
                })}
              />

              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="submit-btn-container">
          <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit(onSubmit)}
          >
            {t("submit")}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default RegisterUser;
