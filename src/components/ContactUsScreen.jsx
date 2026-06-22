import MainLayout from "../layouts/MainLayout";
import "../css/ContactUsScreen.css";

const officers = [
  {
    sno: 1,
    name: "Shri Mukul Dixit",
    designation: "Under Secretary (Public)",
    grievance: "Prime Minister Office",
    phone: "23014155",
    fax: "-",
  },
  {
    sno: 2,
    name: "",
    designation: "Joint Secretary",
    grievance: "Cabinet Secretariat",
    phone: "23743139",
    fax: "-",
  },    
  {
    sno: 3,
    name: "Shri J.G. Subramanian",
    designation: "Deputy Secretary (Admn, Estt. & Transport)",
    grievance: "President's Secretariat",
    phone: "--",
    fax: "-",
  },
];

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="contact-page">

        

        <div className="contact-card">

          <div className="contact-header">
            Contact Us
          </div>

          <div className="contact-content">

            <p className="contact-warning">
              Any Grievance sent by email will not be attended to /
              entertained. Please lodge your grievance on this portal.
            </p>

            <div className="officers-table-wrapper">

              <table className="officers-table">

                <thead>
                  <tr className="table-title-row">
                    <th colSpan="6">
                      Public Grievances Officers
                    </th>
                  </tr>

                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Dealing with grievances related to</th>
                    <th>Phone Number</th>
                    <th>Fax Number</th>
                  </tr>
                </thead>

                <tbody>
                  {officers.map((officer) => (
                    <tr key={officer.sno}>
                      <td>{officer.sno}</td>
                      <td>{officer.name}</td>
                      <td>{officer.designation}</td>
                      <td>{officer.grievance}</td>
                      <td>{officer.phone}</td>
                      <td>{officer.fax}</td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

            <div className="contact-info-section">

              <p>
                Director of Public Grievances, The Department of
                Administrative Reforms and Public Grievances.
              </p>

              <h4>Sardendu Kr Pandey</h4>

              <p>Director</p>

              <p>23401455</p>

            </div>

            <div className="contact-info-section">

              <p>
                Head of the Department, The Department of
                Administrative Reforms and Public Grievances.
              </p>

              <h4>Nivedita Shukla Verma</h4>

              <p>Secretary</p>

              <p>23742133</p>

            </div>

            <div className="technical-support">

              <strong>
               Note: Nagar Setu is a personal project created for learning and demonstration purposes only. It is not affiliated with any government department.
              </strong>

              

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
};

export default ContactUs;