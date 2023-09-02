import React from "react";

const ManagementInfo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row pt-5 pb-4">
      <div className="w-full">
        <h3 className="management_info_title">Legit</h3>
        <p className="management_info_detail">Management Company Name</p>
        <p className="management_info_detail">Manager: John Smith</p>
        <p className="management_info_detail">Management Company Address</p>
        <p className="management_info_detail">
          T: Management Company Phone Number
        </p>
        <p className="management_info_detail">Management Company Email</p>
      </div>
      <div className="w-full">
        <h3 className="management_info_title">Commercial</h3>
        <p className="management_info_detail">Talent Agency Name</p>
        <p className="management_info_detail">Agent: Jane Doe</p>
        <p className="management_info_detail">Talent Agency Address</p>
        <p className="management_info_detail">T: Talent Agency Phone Number</p>
        <p className="management_info_detail">Talent Agency Email</p>
      </div>
    </div>
  );
};

export default ManagementInfo;
