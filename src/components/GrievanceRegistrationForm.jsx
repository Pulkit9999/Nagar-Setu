// import React from "react";
// import MainLayout from "../layouts/MainLayout";
// import SideBar from "../components/SideBar";
// import { useParams } from "react-router-dom";
// const GrievanceRegistrationForm = () => {
//   const { ministry } = useParams();
//   const selectedMinistry = decodeURIComponent(ministry || "");
//   console.log(selectedMinistry);
//   return (
//     <div>
//       <MainLayout>
//         <div className="lodge-grievance-layout">
//         <SideBar />
//         </div>
//       </MainLayout>
//     </div>
//   );
// };

// export default GrievanceRegistrationForm;

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import SideBar from "../components/SideBar";

import "../css/GrievanceRegistrationForm.css";
import { grievanceRegistrationFormData } from "../data/grievanceRegistrationFormData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const GrievanceRegistrationForm = () => {
  const {t} = useTranslation();
  const { ministry } = useParams();
  const selectedMinistry = decodeURIComponent(ministry || "");
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const mainCategory = watch("mainCategory");
  const levelOneCategory = watch("levelOneCategory");
  const levelTwoCategory = watch("levelTwoCategory");
  const remarks = watch("remarks") || "";

  /* ---------------- Reset Child Fields ---------------- */

  useEffect(() => {
    resetField("levelOneCategory");
    resetField("levelTwoCategory");
  }, [mainCategory, resetField]);

  useEffect(() => {
    resetField("levelTwoCategory");
  }, [levelOneCategory, resetField]);

  /* ---------------- Dropdown Data ---------------- */

  const ministryData = grievanceRegistrationFormData[mainCategory];

  const levelOneOptions = ministryData
    ? Object.keys(ministryData.categories)
    : [];

  const levelTwoOptions =
    ministryData && levelOneCategory
      ? Object.keys(ministryData.categories[levelOneCategory].categories)
      : [];

  const dynamicFields =
    ministryData && levelOneCategory && levelTwoCategory
      ? ministryData.categories[levelOneCategory].categories[levelTwoCategory]
          .fields
      : [];

  

  const onSubmit = (data) => {
    const reviewData = {
      ministry: ministry,
      ...data,
     
    };
    navigate("/new-grievance/review-grievance", {
      state: reviewData,
    });
  };

  return (
    <MainLayout>
      <div className="lodge-grievance-layout">
        <SideBar />

        <div className="grievance-registration-container">
          <h2 className="grievance-registration-heading">
            {t("grievanceRegistrationForm")}
          </h2>

          <p className="mandatory-message">
            Fields marked with <span className="mandatory-star">*</span> are
            mandatory.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Ministry */}

            <div className="form-row">
              <label className="form-label">{t("ministryDepartments")}</label>

              <input
                type="text"
                value={selectedMinistry}
                readOnly
                className="form-input readonly-input"
              />
            </div>

            {/* Main Category */}

            <div className="form-row">
              <label className="form-label">
                {t("selectMainCategory")}
                <span className="required"> *</span>
              </label>

              <select
                defaultValue=""
                className="form-select"
                {...register("mainCategory", {
                  required: "This field is required",
                })}
              >
                <option value="">{t("selectMainCategory")}</option>

                {Object.keys(grievanceRegistrationFormData).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {errors.mainCategory && (
              <p className="error-message">{errors.mainCategory.message}</p>
            )}

            {/* Level One */}

            {mainCategory && (
              <>
                <div className="form-row">
                  <label className="form-label">
                    {t("selectNextLevelCategory")}
                    <span className="required"> *</span>
                  </label>

                  <select
                    defaultValue=""
                    className="form-select"
                    {...register("levelOneCategory", {
                      required: "This field is required",
                    })}
                  >
                    <option value="en">{t("selectCategory")}</option>

                    {levelOneOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {errors.levelOneCategory && (
                  <p className="error-message">
                    {errors.levelOneCategory.message}
                  </p>
                )}
              </>
            )}

            {/* Level Two */}

            {levelOneCategory && (
              <>
                <div className="form-row">
                  <label className="form-label">
                    {t("selectNextLevelCategory")}
                    <span className="required"> *</span>
                  </label>

                  <select
                    defaultValue=""
                    className="form-select"
                    {...register("levelTwoCategory", {
                      required: "This field is required",
                    })}
                  >
                    <option value="">{t("selectCategory")}</option>

                    {levelTwoOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {errors.levelTwoCategory && (
                  <p className="error-message">
                    {errors.levelTwoCategory.message}
                  </p>
                )}
              </>
            )}

           

            {/* ---------------- Dynamic Fields ---------------- */}

          

            {dynamicFields.length > 0 && (
              <>
                {dynamicFields.map((field) => (
                  <div className="form-row" key={field.name}>
                    <label className="form-label">
                      {field.label}

                      {field.required && <span className="required"> *</span>}
                    </label>

                    {field.type === "select" && (
                      <select
                        className="form-select"
                        defaultValue=""
                        {...register(field.name, {
                          required: field.required
                            ? "This field is required"
                            : false,
                        })}
                      >
                        <option value="">Select {field.label}</option>

                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {field.type === "text" && (
                      <input
                        type="text"
                        className="form-input"
                        placeholder={`Enter ${field.label}`}
                        {...register(field.name, {
                          required: field.required
                            ? "This field is required"
                            : false,
                        })}
                      />
                    )}

                    {field.type === "textarea" && (
                      <textarea
                        rows="4"
                        className="form-textarea"
                        placeholder={`Enter ${field.label}`}
                        {...register(field.name, {
                          required: field.required
                            ? "This field is required"
                            : false,
                        })}
                      />
                    )}

                    {errors[field.name] && (
                      <p className="error-message">
                        {errors[field.name].message}
                      </p>
                    )}
                  </div>
                ))}
              </>
            )}

            {/* Remarks */}

            <div className="form-row">
              <label className="form-label">
                {t("remarks")}
                <span className="required"> *</span>
              </label>

              <textarea
                rows="5"
                maxLength="500"
                className="form-textarea"
                placeholder="Enter grievance details"
                {...register("remarks", {
                  required: "Remarks are required",
                  maxLength: {
                    value: 500,
                    message: "Maximum 500 characters allowed",
                  },
                })}
              />

              <div className="character-count">{remarks.length}/500</div>

              {errors.remarks && (
                <p className="error-message">{errors.remarks.message}</p>
              )}
            </div>

            {/* Buttons */}

            <div className="form-button-container">
              <button
                type="button"
                className="reset-button"
                onClick={() => window.location.reload()}
              >
                {t("reset")}
              </button>

              <button type="submit" className="submit-button">
                {t("next")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default GrievanceRegistrationForm;
