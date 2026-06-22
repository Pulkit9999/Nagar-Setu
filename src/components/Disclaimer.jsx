
import MainLayout from "../layouts/MainLayout";
import "../css/Disclaimer.css"

const DisclaimerSection = () => {
  return (
    <MainLayout>
      <div className="disclaimer-page">
        <div className="disclaimer-card">

          <h2 className="disclaimer-heading">Disclaimer</h2>

          <div className="disclaimer-content">
            <p>
              This Portal is designed, developed and hosted by National
              Informatics Centre, Government of India.
            </p>

            <p>
              Though all efforts have been made to ensure the accuracy and
              currency of the content on this Portal, the same should not be
              construed as a statement of law or used for any legal purposes.
              Users are advised to verify/check any information with the
              relevant department(s) and obtain appropriate professional advice.
            </p>

            <p>
              This is a Government of India Portal aimed at providing citizens
              with a platform for redress of grievances. If you have any
              grievance against any Government department, you may lodge your
              grievance through the services provided on this Portal.
            </p>

            <p>
              In no event will the Government or NIC be liable for any expense,
              loss or damage arising from the use of this Portal.
            </p>

            <p>
              Links to external websites are provided solely for public
              convenience. NIC is not responsible for the contents or
              reliability of linked websites and does not necessarily endorse
              the views expressed within them.
            </p>

            <p>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of India.
            </p>
          </div>

          <h2 className="disclaimer-heading">Privacy Policy</h2>

          <div className="disclaimer-content">
            <p>
              The Public Grievance Portal does not automatically capture any
              specific personal information that allows us to identify
              individual users.
            </p>

            <p>
              Information voluntarily provided through the Portal will be used
              only for the purpose for which it is intended and will be
              protected against unauthorized access.
            </p>

            <p>
              We collect limited technical information such as IP address,
              browser type, operating system, date and time of visit, and pages
              visited for analytical and security purposes.
            </p>
          </div>

          <h2 className="disclaimer-heading">Linking Policy</h2>

          <div className="disclaimer-content">
            <h4 className="sub-heading">
              Links to External Websites/Portals
            </h4>

            <p>
              At many places in this Portal, you shall find links to other
              websites/portals. These links have been placed for your
              convenience. NIC is not responsible for the contents and
              reliability of the linked websites.
            </p>

            <h4 className="sub-heading">
              Links to Public Grievance Portal by Other Websites
            </h4>

            <p>
              We do not object to you linking directly to the information
              hosted on this Portal. However, we would appreciate being informed
              about any links provided to this Portal.
            </p>

            <p>
              For more details and banners to link to our Portal, kindly
              contact us through the Contact Us section.
            </p>
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default DisclaimerSection;