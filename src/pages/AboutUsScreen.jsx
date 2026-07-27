import MainLayout from "../layouts/MainLayout";
import "../css/AboutUsScreen.css";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="about-us-page">
        <div className="about-us-container">
          <h1 className="about-us-heading">About Us</h1>
          <div className="about-us-content">
            <p>
              Director , {}
              <strong>
                XYZ Department
              </strong>
              , is the primary  agency to formulate policy guidelines for
              citizen-centric governance in the country. Redress of citizen's
              grievances, being one of the most important initiatives of the
              department, this department  formulates public grievance redressal
              mechanisms for effective and timely redress / settlement of
              citizen's grievances.
            </p>

            <p>
              The department has been making endeavors to bring excellence in
              public service delivery and to redress grievances of citizens in a
              meaningful manner by effectively coordinating with different
              Ministries and Departments ,  trying to
              eliminate the causes of grievances.
            </p>

            <p>
              This portal is aimed at providing the
              citizens with a platform for redress of their grievances. If you
              have any grievance against any Government organization in the
              country, you may lodge your grievance here which will go to the
              Ministry/Department/State Government concerned for immediate
              redress.
            </p>

            <p>
              Department 
              has signed a memorandum of understanding for developing Artificial
              Intelligence Machine Learning techniques apart from other New
              Generation technologies to analyse public grievances.
            </p>

            <p>
              Presently, in addition to flagging urgent grievances using
              Artificial Intelligence, the  Grievance System 
               deployed also functions as a
              module and performs the following functions:
            </p>

            <ul className="about-us-list">
              <li>
                Automatically detects spam, bulk and repetitive grievances in
                real-time.
              </li>
              <li>
                Automatically identifies the semantic gist of grievances by
                analyzing their text contents and pdf attachments.
              </li>
              <li>
                Automatically detects important clusters of topics reflecting
                issues that multiple citizens are complaining about.
              </li>
              <li>
                Enables spatiotemporal filtering of themes and topics being
                reflected in grievances.
              </li>
            </ul>

            <p className="about-us-contact-heading">
              Any query/comments/discrepancies may be communicated to the department
                as per the
              following Contact Address:
            </p>

            <div className="about-us-contact">
              <p>ABC (Being just a demo project)</p>
              <p>Director</p>
              <p>
                Department - XYZ (Being just a demo project)
              </p>
              <p>PQR Street (Being just a demo project)</p>
              <p>434321 </p>

              <p className="about-us-disclaimer">
                Note: Nagar Setu is a personal project created for learning and
                demonstration purposes only. It is not affiliated with any
                government department.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
