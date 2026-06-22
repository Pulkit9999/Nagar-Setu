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
              Director of Public Grievances,{" "}
              <strong>
                The Department of Administrative Reforms and Public Grievances
              </strong>
              , is the nodal agency to formulate policy guidelines for
              citizen-centric governance in the country. Redress of citizen's
              grievances, being one of the most important initiatives of the
              department, DAR&amp;PG formulates public grievance redress
              mechanisms for effective and timely redress / settlement of
              citizen's grievances.
            </p>

            <p>
              The DAR&amp;PG has been making endeavors to bring excellence in
              public service delivery and to redress grievances of citizens in a
              meaningful manner by effectively coordinating with different
              Ministries and Departments of the Government and trying to
              eliminate the causes of grievances.
            </p>

            <p>
              This is a Government of India Portal aimed at providing the
              citizens with a platform for redress of their grievances. If you
              have any grievance against any Government organization in the
              country, you may lodge your grievance here which will go to the
              Ministry/Department/State Government concerned for immediate
              redress.
            </p>

            <p>
              Department of Administrative Reforms and Public Grievances (DARPG)
              has signed a memorandum of understanding for developing Artificial
              Intelligence Machine Learning techniques apart from other New
              Generation technologies to analyse public grievances.
            </p>

            <p>
              Presently, in addition to flagging urgent grievances using
              Artificial Intelligence, the Intelligent Grievance Management
              System (IGMS) deployed by DARPG in CPGRAMS also functions as a
              module within CPGRAMS 7.0 and performs the following functions:
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
              Any query/comments/discrepancies may be communicated to Department
              of Administrative Reforms &amp; Public Grievances as per the
              following Contact Address:
            </p>

            <div className="about-us-contact">
              <p>Parthasarthy Bhaskar</p>
              <p>Director (PG)</p>
              <p>
                The Department of Administrative Reforms and Public Grievances,
                Sardar Patel Bhawan
              </p>
              <p>Parliament Street, New Delhi 110001</p>
              <p>23440439</p>

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
