

import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import SelectMinistry from "../pages/SelectMinistry";
import "../css/SelectMinistryPage.css";


const SelectMinistryPage = () => {
  return (
    <MainLayout>

      <div className="select-ministry-layout">

        <Sidebar />

        <SelectMinistry />

      </div>

    </MainLayout>
  );
};

export default SelectMinistryPage;