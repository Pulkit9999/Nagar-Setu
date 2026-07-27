import MainLayout from "../layouts/MainLayout";
import "../css/WebsitePolicies.css";

const WebsitePolicies = () => {
  return (
    <MainLayout>
      <div className="website-policies-page">
        <div className="website-policies-card">

          <h1 className="page-title">Website Policies</h1>

          <section className="policy-section">
            <h2 className="policy-heading">Copyright Policy</h2>

            <p>
              Material featured on this Website may be reproduced free of charge.
              However, the material has to be reproduced accurately and not to be
              used in a derogatory manner or in a misleading context.
            </p>

            <p>
              Wherever the material is being published or issued to others, the
              source must be prominently acknowledged. However, the permission to
              reproduce this material shall not extend to any material identified
              as being copyright of a third party.
            </p>

            <p>
              Authorization to reproduce such material must be obtained from the
              departments/copyright holders concerned.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">Hyperlinking Policy</h2>

            <h3 className="sub-heading">
              Links to External Websites/Portals
            </h3>

            <p>
              At many places in this Website, you shall find links to other
              Websites/Portals/Web Applications/Mobile Applications. These links
              have been placed for your convenience.
            </p>

            <p>
              The Department is not responsible for the contents of linked
              destinations and does not necessarily endorse the views expressed
              in them. Mere presence of the link shall not be assumed as an
              endorsement of any kind.
            </p>

            <p>
              We cannot guarantee that these links will work at all times and
              have no control over availability of linked destinations.
            </p>

            <h3 className="sub-heading">
              Links to our Website by other Websites/Portals
            </h3>

            <p>
              We do not object to you linking directly to the information hosted
              on this Website and no prior permission is required.
            </p>

            <p>
              However, we would like you to inform us about any links provided
              to this Website so that you can be informed of any changes or
              updates therein.
            </p>

            <p>
              Also, we do not permit our pages to be loaded into frames on your
              site. The pages belonging to this Website must load into a newly
              opened browser window of the user.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">Privacy Policy</h2>

            <p>
              Nagar Setu does not automatically capture any specific personal
              information from you that allows us to identify you individually.
            </p>

            <p>
              If you choose to provide us with your personal information, such
              as name, phone number or e-mail address, it will be used only for
              the purpose for which it has been provided.
            </p>

            <p>
              We do not sell or share any personally identifiable information
              volunteered on this Website to any third party.
            </p>

            <p>
              Any information provided will be protected from loss, misuse,
              unauthorized access, disclosure, alteration and destruction.
            </p>

            <p>
              We gather certain technical information such as IP address,
              browser type, operating system, date and time of visit and pages
              visited for analytical and security purposes.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">Terms & Conditions</h2>

            <p>
              This Website is designed, developed and maintained by Nagar Setu.
            </p>

            <p>
              Though all efforts have been made to ensure the accuracy and
              currency of the content on this Website, the same should not be
              construed as a statement of law or used for any legal purposes.
            </p>

            <p>
              Users are advised to verify/check any information with relevant
              authorities and obtain appropriate professional advice wherever
              required.
            </p>

            <p>
              Under no circumstances shall Nagar Setu be liable for any expense,
              loss or damage arising from the use of this Website.
            </p>

            <p>
              Information posted on this Website could include hyperlinks or
              pointers to information created and maintained by non-government
              organizations for informational purposes only.
            </p>

            <p>
              Nagar Setu does not guarantee the availability of linked pages at
              all times and cannot authorize the use of copyrighted material
              contained in linked Websites.
            </p>

            <p>
              Users are advised to request such authorization from owners of
              linked Websites wherever required.
            </p>
          </section>

        </div>
      </div>
    </MainLayout>
  );
};

export default WebsitePolicies;