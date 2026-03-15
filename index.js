console.log("Hello CodeSandbox");
const linkedIn = require("linkedin-jobs-api");
const jsonXLSX = require("json2xlsx");
const fs = require("fs");
const queryOptions = {
  keyword: "software engineer",
  location: "India",
  dateSincePosted: "past Week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "100000",
  experienceLevel: "entry level",
  limit: "10",
  page: "0",
  has_verification: false,
  under_10_applicants: false,
};

linkedIn.query(queryOptions).then((response) => {
  console.table(response);
  const jsonData = JSON.stringify(response, null, 2);
  
  // Write to a file named 'Jobs.json'
  fs.writeFileSync("Jobs.json", jsonData);
  
  // Write to an XLSX file named 'Jobs.xlsx'
  jsonXLSX.write('Jobs.xlsx', 'Jobs', response);

  console.log("Files saved to project folder!");
});