import React from 'react';
import './App.css';
import Table from "./components/Table";

const moment = require("moment");

class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    this.setState({ employees: employees });
  }

  render() {
    return (
      <div className="App">
        <Table employees={employees} />
      </div>
    );
  }
}

export default App;

const employees = [
  {
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
