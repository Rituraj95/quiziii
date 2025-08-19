export const quiz24 = {
  title: "DBMS Lecture 4 (Languages & Keys) Quiz",
  questions: [
    {
      question: "What is a Composite Key?",
      options: [
        "A key made of a single unique column",
        "A combination of two or more columns that uniquely identify a row",
        "A key that is a foreign key in another table",
        "A key used only for sorting data"
      ],
      answer: 1,
      explanation: "A Composite Key is formed by combining two or more columns that uniquely identify a row."
    },
    {
      question: "Which of the following is a classic example of a Composite Key use case?",
      options: [
        "A single Student ID number",
        "An email address and password combination",
        "A person's first name",
        "A product's color"
      ],
      answer: 1,
      explanation: "An email address and password combination is a typical Composite Key example."
    },
    {
      question: "A Super Key is defined as:",
      options: [
        "A key that is a subset of a Candidate Key",
        "A combination of all possible attributes that can uniquely identify a tuple",
        "A key that can have NULL values",
        "A key used for controlling data access"
      ],
      answer: 1,
      explanation: "A Super Key is any combination of attributes that can uniquely identify a tuple."
    },
    {
      question: "What is the relationship between a Super Key and other keys?",
      options: [
        "All other keys are subsets of a Super Key",
        "A Super Key is a subset of a Candidate Key",
        "A Super Key is the same as a Foreign Key",
        "There is no relationship"
      ],
      answer: 0,
      explanation: "All other keys (like Candidate Keys, Primary Keys) are subsets of a Super Key."
    },
    {
      question: "What does DDL stand for?",
      options: [
        "Data Design Language",
        "Data Definition Language",
        "Data Development Language",
        "Data Deletion Language"
      ],
      answer: 1,
      explanation: "DDL stands for Data Definition Language, which defines the structure of the database."
    },
    {
      question: "Which SQL command is used to change the structure of a database table?",
      options: ["UPDATE", "SELECT", "ALTER", "INSERT"],
      answer: 2,
      explanation: "The ALTER command modifies the structure of an existing table."
    },
    {
      question: "Which of the following is NOT a DDL command?",
      options: ["CREATE", "ALTER", "TRUNCATE", "SELECT"],
      answer: 3,
      explanation: "SELECT is a DQL command, not a DDL command."
    },
    {
      question: "The TRUNCATE command is used to:",
      options: [
        "Remove all records but keep the table structure",
        "Remove the entire table structure",
        "Update specific records",
        "Add a new column to a table"
      ],
      answer: 0,
      explanation: "TRUNCATE deletes all rows but retains the table structure."
    },
    {
      question: "What is the key difference between TRUNCATE and DROP?",
      options: [
        "TRUNCATE removes structure, DROP removes data",
        "TRUNCATE removes data but keeps structure, DROP removes both structure and data",
        "There is no difference",
        "TRUNCATE is for queries, DROP is for manipulation"
      ],
      answer: 1,
      explanation: "TRUNCATE removes only data, while DROP removes both the data and structure."
    },
    {
      question: "What does DQL stand for?",
      options: [
        "Data Quality Language",
        "Data Question Language",
        "Data Query Language",
        "Data Quantity Language"
      ],
      answer: 2,
      explanation: "DQL stands for Data Query Language, primarily used for retrieving data."
    },
    {
      question: "Which command is the primary DQL command?",
      options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
      answer: 2,
      explanation: "SELECT is the main command used in DQL to query data."
    },
    {
      question: "DML stands for:",
      options: [
        "Data Markup Language",
        "Data Management Language",
        "Data Manipulation Language",
        "Data Model Language"
      ],
      answer: 2,
      explanation: "DML stands for Data Manipulation Language, which modifies data in tables."
    },
    {
      question: "Which of the following is a DML command?",
      options: ["CREATE", "ALTER", "GRANT", "INSERT"],
      answer: 3,
      explanation: "INSERT is a DML command used to add new records."
    },
    {
      question: "What is the purpose of DCL?",
      options: [
        "To define database structure",
        "To manipulate data in tables",
        "To control access and privileges",
        "To handle database transactions"
      ],
      answer: 2,
      explanation: "DCL (Data Control Language) manages user access and permissions."
    },
    {
      question: "Which DCL command is used to give a user permission to access a database?",
      options: ["REVOKE", "GRANT", "ALLOW", "PERMIT"],
      answer: 1,
      explanation: "GRANT provides privileges to a user."
    },
    {
      question: "The REVOKE command is used to:",
      options: [
        "Give privileges to a user",
        "Take away privileges from a user",
        "Create a new user",
        "Delete a table"
      ],
      answer: 1,
      explanation: "REVOKE removes previously granted privileges from a user."
    },
    {
      question: "Which category of SQL language does the COMMAND command belong to?",
      options: ["DML", "DDL", "DCL", "TCL"],
      answer: 1,
      explanation: "The COMMAND command falls under DDL (Data Definition Language)."
    },
    {
      question: "The RENAME command is used to:",
      options: [
        "Change the data in a column",
        "Change the name of a database object",
        "Change user access privileges",
        "Change the structure of a table"
      ],
      answer: 1,
      explanation: "RENAME modifies the name of a table, column, or other object."
    },
    {
      question: "According to the notes, who typically performs all SQL operations?",
      options: [
        "End Users",
        "Application Developers",
        "Database Administrator (DBA)",
        "System Analysts"
      ],
      answer: 2,
      explanation: "DBAs usually handle SQL operations, ensuring proper data handling and permissions."
    },
    {
      question: "The ALTER command can perform all of the following EXCEPT:",
      options: ["ADD COLUMN", "DROP COLUMN", "MODIFY COLUMN", "SELECT COLUMN"],
      answer: 3,
      explanation: "ALTER can modify structure but cannot perform SELECT operations."
    }
  ]
};
