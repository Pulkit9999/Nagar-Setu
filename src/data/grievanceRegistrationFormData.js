

// grievanceRegistrationFormData.js

export const grievanceRegistrationFormData = {
  "DDA (Delhi Development Authority)": {
    categories: {
      "Land Related": {
        categories: {
          Allotment: {
            fields: [
              {
                label: "Land Type",
                name: "landType",
                type: "select",
                required: true,
                placeholder: "Select Land Type",
                options: [
                  "Residential",
                  "Commercial",
                  "Industrial",
                ],
              },
              {
                label: "File Number or Registration Number",
                name: "fileNumber",
                type: "text",
                required: true,
                placeholder: "Enter File Number or Registration Number",
              },
            ],
          },

          Possession: {
            fields: [
              {
                label: "Land Type",
                name: "landType",
                type: "select",
                required: true,
                placeholder: "Select Land Type",
                options: [
                  "Residential",
                  "Commercial",
                  "Industrial",
                ],
              },
              {
                label: "File Number or Registration Number",
                name: "fileNumber",
                type: "text",
                required: true,
                placeholder: "Enter File Number or Registration Number",
              },
            ],
          },

          Mutation: {
            fields: [
              {
                label: "Land Type",
                name: "landType",
                type: "select",
                required: true,
                placeholder: "Select Land Type",
                options: [
                  "Residential",
                  "Commercial",
                  "Industrial",
                ],
              },
              {
                label: "File Number or Registration Number",
                name: "fileNumber",
                type: "text",
                required: true,
                placeholder: "Enter File Number or Registration Number",
              },
            ],
          },
        },
      },

      "Service Matters": {
        categories: {
          "Promotion Related": {
            fields: [
              {
                label: "Service Group",
                name: "serviceGroup",
                type: "text",
                required: true,
                placeholder: "Enter Service Group",
              },
              {
                label: "Employee ID",
                name: "employeeId",
                type: "text",
                required: true,
                placeholder: "Enter Employee ID",
              },
              {
                label: "Current Posting",
                name: "currentPosting",
                type: "text",
                required: false,
                placeholder: "Enter Current Posting",
              },
              {
                label: "Designation of the Employee",
                name: "designation",
                type: "text",
                required: false,
                placeholder: "Enter Designation",
              },
            ],
          },

          Retirement: {
            fields: [
              {
                label: "Service Group",
                name: "serviceGroup",
                type: "text",
                required: true,
                placeholder: "Enter Service Group",
              },
              {
                label: "Employee ID",
                name: "employeeId",
                type: "text",
                required: true,
                placeholder: "Enter Employee ID",
              },
              {
                label: "Current Posting",
                name: "currentPosting",
                type: "text",
                required: false,
                placeholder: "Enter Current Posting",
              },
              {
                label: "Designation of the Employee",
                name: "designation",
                type: "text",
                required: false,
                placeholder: "Enter Designation",
              },
            ],
          },
        },
      },
    },
  },

  "Principal Accounts Office": {
    categories: {
      "Various Service Matters": {
        categories: {
          Posting: {
            fields: [
              {
                label: "Mobile No.",
                name: "mobileNumber",
                type: "text",
                required: false,
                placeholder: "Enter Mobile Number",
              },
              {
                label: "PPO No.",
                name: "ppoNumber",
                type: "text",
                required: false,
                placeholder: "Enter PPO Number",
              },
              {
                label: "Office Last Attended",
                name: "officeLastAttended",
                type: "text",
                required: false,
                placeholder: "Enter Office Last Attended",
              },
              {
                label: "Concerned PAO",
                name: "concernedPao",
                type: "select",
                required: true,
                placeholder: "Select Concerned PAO",
                options: [
                  "PAO (New Delhi)",
                  "PAO (Mumbai)",
                  "PAO (Shillong)",
                  "PAO (Nasik)",
                ],
              },
            ],
          },

          Promotion: {
            fields: [
              {
                label: "Mobile No.",
                name: "mobileNumber",
                type: "text",
                required: false,
                placeholder: "Enter Mobile Number",
              },
              {
                label: "PPO No.",
                name: "ppoNumber",
                type: "text",
                required: false,
                placeholder: "Enter PPO Number",
              },
              {
                label: "Office Last Attended",
                name: "officeLastAttended",
                type: "text",
                required: false,
                placeholder: "Enter Office Last Attended",
              },
              {
                label: "Concerned PAO",
                name: "concernedPao",
                type: "select",
                required: true,
                placeholder: "Select Concerned PAO",
                options: [
                  "PAO (New Delhi)",
                  "PAO (Mumbai)",
                  "PAO (Shillong)",
                  "PAO (Nasik)",
                ],
              },
            ],
          },
        },
      },
    },
  },
};