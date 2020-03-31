import React from 'react';
import './App.css';
import Search from "./components/Search";
import Table from "./components/Table";

const moment = require("moment");

class App extends React.Component {

  state = {
    employees: [],
    sortedBy: "",
    filtered: false
  };

  componentDidMount() {
    this.setState({ employees: employees });
  }

  searchByTerm = (term) => {
    term = term.toLowerCase();
    let emps = this.state.employees;
    let matches = emps.filter( emp => {
      return ( 
        emp.name.last.toLowerCase().indexOf(term) !== -1 ||
        emp.name.first.toLowerCase().indexOf(term) !== -1 ||
        emp.email.toLowerCase().indexOf(term) !== -1 ||
        emp.phone.indexOf(term) !== -1 ||
        emp.dept.toLowerCase().indexOf(term) !== -1 ||
        emp.hire.format("MMM D YYYY").toLowerCase().indexOf(term) !== -1
      );
    });
    this.setState({
      employees: matches,
      filtered: true
    });
  };

  clearFilter = () => {
    this.setState({ 
      employees: employees,
      filtered: false
    });
  }

  sortByName = () => {

    if(this.state.sortedBy === "name") { //reverse sort
      this.setState({
        employees: this.state.employees.reverse()
      });
    }
    else { //sort by name
      const sorted = this.state.employees.sort( (a, b) => {
        let x = a.name.last.toLowerCase();
        let y = b.name.last.toLowerCase();
        if(x < y) {
          return -1;
        }
        if(x > y) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: sorted,
        sortedBy: "name"
      });
    }
  };

  sortByDept = () => {

    if(this.state.sortedBy === "dept") { //reverse sort
      this.setState({
        employees: this.state.employees.reverse()
      });
    }
    else { //sort by department
      const sorted = this.state.employees.sort( (a, b) => {
        let x = a.dept.toLowerCase();
        let y = b.dept.toLowerCase();
        if(x < y) {
          return -1;
        }
        if(x > y) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: sorted,
        sortedBy: "dept"
      });
    }
  };

  sortByHire = () => {
    
    if(this.state.sortedBy === "hire") { //reverse sort
      this.setState({
        employees: this.state.employees.reverse()
      });
    }
    else { //sort by department
      const sorted = this.state.employees.sort( (a, b) => {
        if(a.hire < b.hire) {
          return -1;
        }
        if(a.hire > b.hire) {
          return 1;
        }
        return 0;
      });
      this.setState({
        employees: sorted,
        sortedBy: "hire"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Search filtered={this.state.filtered} clearFilter={this.clearFilter} searchByTerm={this.searchByTerm} />
        <Table
          employees={this.state.employees}
          sortByName={this.sortByName}
          sortByDept={this.sortByDept}
          sortByHire={this.sortByHire}
        />
      </div>
    );
  }
}

export default App;

const employees = [
  {
    id: "355",
    name: {
      first: "Evan",
      last: "Marsh"
    },
    email: "emarsh@company.com",
    phone: "303-555-0163",
    dept: "Engineering",
    hire: moment("2017-03-27")
  },
  {
    id: "155",
    name: {
      first: "Lester",
      last: "Nguyen"
    },
    email: "lnguyen@company.com",
    phone: "303-555-0129",
    dept: "Marketing",
    hire: moment("2015-11-02")
  },
  {
    id: "654",
    name: {
      first: "Lloyd",
      last: "Adams"
    },
    email: "ladams@company.com",
    phone: "303-555-0130",
    dept: "Marketing",
    hire: moment("1999-08-03")
  },
  {
    id: "896",
    name: {
      first: "Krista",
      last: "Carlson"
    },
    email: "kcarlson@company.com",
    phone: "303-555-0176",
    dept: "Corporate",
    hire: moment("2008-12-22")
  },
  {
    id: "803",
    name: {
      first: "Marcella",
      last: "McDonald"
    },
    email: "mmcdonal@company.com",
    phone: "303-555-0180",
    dept: "Sales",
    hire: moment("2019-10-15")
  },
  {
    id: "933",
    name: {
      first: "Everett",
      last: "Lyons"
    },
    email: "elyons@company.com",
    phone: "303-555-0185",
    dept: "Accounting",
    hire: moment("2020-01-30")
  },
  {
    id: "267",
    name: {
      first: "Orville",
      last: "Lawrence"
    },
    email: "olawrenc@company.com",
    phone: "303-555-0156",
    dept: "Engineering",
    hire: moment("2011-05-29")
  },
  {
    id: "549",
    name: {
      first: "Jaime",
      last: "Lucas"
    },
    email: "jlucas@company.com",
    phone: "303-555-0124",
    dept: "Sales",
    hire: moment("2013-09-08")
  },
  {
    id: "210",
    name: {
      first: "Elena",
      last: "Francis"
    },
    email: "efrancis@company.com",
    phone: "303-555-0121",
    dept: "Sales",
    hire: moment("2017-07-12")
  },
  {
    id: "571",
    name: {
      first: "Mattie",
      last: "Strickland"
    },
    email: "mstrickl@company.com",
    phone: "303-555-0137",
    dept: "Accounting",
    hire: moment("2015-02-11")
  },
  {
    id: "965",
    name: {
      first: "Bruce",
      last: "Park"
    },
    email: "bpark@company.com",
    phone: "303-555-0133",
    dept: "Engineering",
    hire: moment("1996-11-08")
  },
  {
    id: "505",
    name: {
      first: "Andrea",
      last: "Bush"
    },
    email: "abush@company.com",
    phone: "303-555-0110",
    dept: "Marketing",
    hire: moment("2004-02-15")
  },
  {
    id: "159",
    name: {
      first: "Andres",
      last: "Higgins"
    },
    email: "ahiggins@company.com",
    phone: "303-555-0148",
    dept: "Engineering",
    hire: moment("2012-04-13")
  },
  {
    id: "194",
    name: {
      first: "Sonya",
      last: "Burns"
    },
    email: "sburns@company.com",
    phone: "303-555-0118",
    dept: "Marketing",
    hire: moment("2016-06-05")
  },
  {
    id: "450",
    name: {
      first: "Erika",
      last: "Howard"
    },
    email: "ehoward@company.com",
    phone: "303-555-0114",
    dept: "Sales",
    hire: moment("2018-12-07")
  },
  {
    id: "525",
    name: {
      first: "Arlene",
      last: "Page"
    },
    email: "apage@company.com",
    phone: "303-555-0198",
    dept: "Engineering",
    hire: moment("2001-01-21")
  },
  {
    id: "826",
    name: {
      first: "Melvin",
      last: "Holmes"
    },
    email: "mholmes@company.com",
    phone: "303-555-0195",
    dept: "Engineering",
    hire: moment("2009-10-19")
  },
  {
    id: "359",
    name: {
      first: "Devin",
      last: "Sanchez"
    },
    email: "dsanchez@company.com",
    phone: "303-555-0151",
    dept: "Corporate",
    hire: moment("2016-11-19")
  },
  {
    id: "254",
    name: {
      first: "Stanley",
      last: "Christensen"
    },
    email: "schriste@company.com",
    phone: "303-555-0162",
    dept: "Engineering",
    hire: moment("2018-10-31")
  },
  {
    id: "054",
    name: {
      first: "Crystal",
      last: "Jordan"
    },
    email: "cjordan@company.com",
    phone: "303-555-0138",
    dept: "Legal",
    hire: moment("2007-05-06")
  },
  {
    id: "025",
    name: {
      first: "Ervin",
      last: "Underwood"
    },
    email: "eunderwo@company.com",
    phone: "303-555-0122",
    dept: "Accounting",
    hire: moment("2019-12-29")
  },
  {
    id: "387",
    name: {
      first: "Rufus",
      last: "Nichols"
    },
    email: "rnichols@company.com",
    phone: "303-555-0188",
    dept: "Engineering",
    hire: moment("1994-03-15")
  },
  {
    id: "878",
    name: {
      first: "Moses",
      last: "Dunn"
    },
    email: "mdunn@company.com",
    phone: "303-555-0164",
    dept: "Legal",
    hire: moment("2002-08-18")
  },
  {
    id: "729",
    name: {
      first: "Jodi",
      last: "Douglas"
    },
    email: "jdouglas@company.com",
    phone: "303-555-0119",
    dept: "Sales",
    hire: moment("2014-06-29")
  },
  {
    id: "492",
    name: {
      first: "Paul",
      last: "Wong"
    },
    email: "pwong@company.com",
    phone: "303-555-0109",
    dept: "Sales",
    hire: moment("2016-09-06")
  }
]
