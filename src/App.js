import React from 'react';
import logo from './logo.svg';
import './App.css';

const employees = [
  {
    name: {
      first: "Evan",
      last: "Marsh"
    },
    email: "emarsh@company.com",
    phone: "303-555-0163",
    dept: "Engineering",
    hire: new Date(2017, 2, 27)
  },
  {
    name: {
      first: "Lester",
      last: "Nguyen"
    },
    email: "lnguyen@company.com",
    phone: "303-555-0129",
    dept: "Marketing",
    hire: new Date(2015, 10, 2)
  },
  {
    name: {
      first: "Lloyd",
      last: "Adams"
    },
    email: "ladams@company.com",
    phone: "303-555-0130",
    dept: "Marketing",
    hire: new Date(1999, 7, 3)
  },
  {
    name: {
      first: "Krista",
      last: "Carlson"
    },
    email: "kcarlson@company.com",
    phone: "303-555-0176",
    dept: "Corporate",
    hire: new Date(2008, 11, 22)
  },
  {
    name: {
      first: "Marcella",
      last: "McDonald"
    },
    email: "mmcdonal@company.com",
    phone: "303-555-0180",
    dept: "Sales",
    hire: new Date(2019, 9, 15)
  },
  {
    name: {
      first: "Everett",
      last: "Lyons"
    },
    email: "elyons@company.com",
    phone: "303-555-0185",
    dept: "Accounting",
    hire: new Date(2020, 0, 30)
  },
  {
    name: {
      first: "Orville",
      last: "Lawrence"
    },
    email: "olawrenc@company.com",
    phone: "303-555-0156",
    dept: "Engineering",
    hire: new Date(2011, 4, 29)
  },
  {
    name: {
      first: "Jaime",
      last: "Lucas"
    },
    email: "jlucas@company.com",
    phone: "303-555-0124",
    dept: "Sales",
    hire: new Date(2013, 8, 8)
  },
  {
    name: {
      first: "Elena",
      last: "Francis"
    },
    email: "efrancis@company.com",
    phone: "303-555-0121",
    dept: "Sales",
    hire: new Date(2017, 6, 12)
  },
  {
    name: {
      first: "Mattie",
      last: "Strickland"
    },
    email: "mstrickl@company.com",
    phone: "303-555-0137",
    dept: "Accounting",
    hire: new Date(2015, 1, 11)
  },
  {
    name: {
      first: "Bruce",
      last: "Park"
    },
    email: "bpark@company.com",
    phone: "303-555-0133",
    dept: "Engineering",
    hire: new Date(1996, 10, 8)
  },
  {
    name: {
      first: "Andrea",
      last: "Bush"
    },
    email: "abush@company.com",
    phone: "303-555-0110",
    dept: "Marketing",
    hire: new Date(2004, 1, 15)
  },
  {
    name: {
      first: "Andres",
      last: "Higgins"
    },
    email: "ahiggins@company.com",
    phone: "303-555-0148",
    dept: "Engineering",
    hire: new Date(2012, 3, 13)
  },
  {
    name: {
      first: "Sonya",
      last: "Burns"
    },
    email: "sburns@company.com",
    phone: "303-555-0118",
    dept: "Marketing",
    hire: new Date(2016, 5, 5)
  },
  {
    name: {
      first: "Erika",
      last: "Howard"
    },
    email: "ehoward@company.com",
    phone: "303-555-0114",
    dept: "Sales",
    hire: new Date(2018, 11, 7)
  },
  {
    name: {
      first: "Arlene",
      last: "Page"
    },
    email: "apage@company.com",
    phone: "303-555-0198",
    dept: "Engineering",
    hire: new Date(2001, 0, 21)
  },
  {
    name: {
      first: "Melvin",
      last: "Holmes"
    },
    email: "mholmes@company.com",
    phone: "303-555-0195",
    dept: "Engineering",
    hire: new Date(2009, 9, 19)
  },
  {
    name: {
      first: "Devin",
      last: "Sanchez"
    },
    email: "dsanchez@company.com",
    phone: "303-555-0151",
    dept: "Corporate",
    hire: new Date(2016, 10, 29)
  },
  {
    name: {
      first: "Stanley",
      last: "Christensen"
    },
    email: "schriste@company.com",
    phone: "303-555-0162",
    dept: "Engineering",
    hire: new Date(2018, 9, 31)
  },
  {
    name: {
      first: "Crystal",
      last: "Jordan"
    },
    email: "cjordan@company.com",
    phone: "303-555-0138",
    dept: "Legal",
    hire: new Date(2007, 4, 6)
  },
  {
    name: {
      first: "Ervin",
      last: "Underwood"
    },
    email: "eunderwo@company.com",
    phone: "303-555-0122",
    dept: "Accounting",
    hire: new Date(2019, 11, 29)
  },
  {
    name: {
      first: "Rufus",
      last: "Nichols"
    },
    email: "rnichols@company.com",
    phone: "303-555-0188",
    dept: "Engineering",
    hire: new Date(1994, 2, 15)
  },
  {
    name: {
      first: "Moses",
      last: "Dunn"
    },
    email: "mdunn@company.com",
    phone: "303-555-0164",
    dept: "Legal",
    hire: new Date(2002, 7, 18)
  },
  {
    name: {
      first: "Jodi",
      last: "Douglas"
    },
    email: "jdouglas@company.com",
    phone: "303-555-0119",
    dept: "Sales",
    hire: new Date(2014, 5, 29)
  },
  {
    name: {
      first: "Paul",
      last: "Wong"
    },
    email: "pwong@company.com",
    phone: "303-555-0109",
    dept: "Sales",
    hire: new Date(2016, 8, 6)
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
