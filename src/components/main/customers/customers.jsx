import React from "react";
import "./Customers.css";

let companies = [
  {
    customer_name: "Jane Cooper",
    Company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Active",
  },
  {
    customer_name: "Floyd Miles",
    Company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    Email: "floyd@yahoo.com",
    Country: "Kiribati",
    Status: "Inactive",
  },
  {
    customer_name: "Ronald Richards",
    Company: "Adobe",
    phoneNumber: "(302) 555-0107",
    Email: "ronald@adobe.com",
    Country: "Israel",
    Status: "Inactive",
  },
  {
    customer_name: "Marvin McKinney",
    Company: "Tesla",
    phoneNumber: "(252) 555-0126",
    Email: "marvin@tesla.com",
    Country: "Iran",
    Status: "Active",
  },
  {
    customer_name: "Jerome Bell",
    Company: "Google",
    phoneNumber: "(629) 555-0129",
    Email: "jerome@google.com",
    Country: "Réunion",
    Status: "Active",
  },
  {
    customer_name: "Kathryn Murphy",
    Company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    Email: "kathryn@microsoft.com",
    Country: "Curaçao",
    Status: "Active",
  },
  {
    customer_name: "Jacob Jones",
    Company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    Email: "jacob@yahoo.com",
    Country: "Brazil",
    Status: "Active",
  },
  {
    customer_name: "Kristin Watson",
    Company: "Facebook",
    phoneNumber: "(704) 555-0127",
    Email: "kristin@facebook.com",
    Country: "Åland Islands",
    Status: "Inactive",
  },
];

function Customers() {
  return (
    <div className="customers-box">
      <div className="customers-top">
        <h2>
          All Customers <span>Active Members</span>
        </h2>

        <div className="inputs-top">
          <input placeholder="Search" type="text" />
          <i className="fa-solid fa-search"></i>

          <button>
            <p>Short by : </p>
            <select>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </button>
        </div>
      </div>

      <div className="customers-center">
        <div className="customers-desc">
          <p style={{ width: "120px" }}>Customer Name</p>
          <p style={{ width: "70px" }}>Company</p>
          <p style={{ width: "125px" }}>Phone Number</p>
          <p style={{ width: "170px" }}>Email</p>
          <p style={{ width: "100px" }}>Country</p>
          <p
            style={{ width: "80px", marginRight: "-15px", marginLeft: "15px" }}
          >
            Status
          </p>
        </div>

        <div className="customers-boxes">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <p className="user-name">{company.customer_name}</p>
              <a href="#" className="user-company">{company.Company}</a>
              <p className="user-number">{company.phoneNumber}</p>
              <p className="user-email">{company.Email}</p>
              <p className="user-cnt">{company.Country}</p>
              <p  id={company.Status === "Active" ? "active" : "inactive"} className="user-status">{company.Status}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="customers-bottom"></div>
    <div className='customers-box'>
    </div>
  );
}



export default Customers;
