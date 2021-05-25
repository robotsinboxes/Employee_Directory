import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import TableHeader from './components/TableHeader';
import EmployeeTable from './components/EmployeeTable';
import employees from './employees.json';

let sortArrow ="bi bi-caret-down";
class App extends React.Component {
  state = {
    employees,
    sortArrow,
    searchBar: "",
  };

  // set up sort functionality
  onSort(event, sortKey) {
    let randomBoolean = Math.random() < 0.5;
    let randBool=randomBoolean;
    const employees = this.state.employees;
    // set sort to ascending
    if(randBool){
      employees.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
      sortArrow="bi bi-caret-up";
    // set sort to descending
    } else {
      employees.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
      sortArrow="bi bi-caret-down";
    }
    randBool = !randomBoolean
    this.setState({ employees, sortArrow })
  }

  render() {
    const {employees, searchBar} = this.state;
    const filteredEmployees = employees.filter((item) => (
      item.name.toLowerCase().includes(searchBar.toLowerCase()) || 
      item.role.toLowerCase().includes(searchBar.toLowerCase()) ||
      item.email.toLowerCase().includes(searchBar.toLowerCase())
    ));
    return (
      <Wrapper>
        <div className="container-fluid">
          <Header />
          <SearchForm handleChange={(e) => this.setState(
            {searchField: e.target.value})} 
          />
          <table className="table container-fluid">
          <TableHeader>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" >Photo</th>

              <th scope="col" onClick={e => this.onSort(e, 'name')}><button className="button btn">Name<i className={this.state.sortArrow}></i></button></th>

              <th scope="col" onClick={e => this.onSort(e, 'role')}><button className="button btn">Role<i className={this.state.sortArrow}></i></button></th>

              <th scope="col" onClick={e => this.onSort(e, 'email')}><button className="button btn">Email<i className={this.state.sortArrow}></i></button></th>
            </tr>
            
            {filteredEmployees.map((employee) => (
              <EmployeeTable
              key={employee.id}
              id={employee.id}
              image={employee.image}
              name={employee.name}
              role={employee.role}
              email={employee.email}
              />
              ))}
          </TableHeader>
            <tbody>
              {this.state.employees.map(employee => (
                <EmployeeTable
                  key={employee.id}
                  id={employee.id}
                  image={employee.image}
                  name={employee.name}
                  role={employee.role}
                  email={employee.email}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    )
  }
}

export default App;
