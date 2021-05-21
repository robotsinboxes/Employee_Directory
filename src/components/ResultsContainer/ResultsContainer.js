import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Results from "./Results";
import API from "../utils/API";

// Get 'employees' to fill out the results container
function ResultsContainer(){
  const [employees, setEmployees] = useState([]);
  // get random employees when component mounts ('onLoad')
  useEffect(() => {
    API.search()
    .then(employees => {
      setEmployees(employees);
    })
    .catch(err => console.log(err));
    console.log(employees)
  }, []);

  // listen for a click on the Next and Previous buttons
  function handleBtnClick(event) {
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

    // render to the page the SearchForm and Results components
    return (
      <EmployeeContext.Provider value={{ name, email, picture, dob, handleBtnClick }}>
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
      </div>
      </EmployeeContext.Provider>
    );
  }

export default ResultsContainer;