export const quiz22 = {
  title: "DBMS Lecture 2 Quiz",
  questions: [
    {
      question: "What is the correct order of data hierarchy from smallest to largest?",
      options: [
        "bit → byte → character → field → record → file → database",
        "byte → bit → field → character → record → database → file",
        "character → byte → bit → record → field → file → database",
        "database → file → record → field → character → byte → bit"
      ],
      answer: 0,
      explanation: "The correct order is: bit → byte → character → field → record → file → database."
    },
    {
      question: "Which of the following is NOT a basic database operation?",
      options: ["Insertion", "Updation", "Deletion", "Encryption"],
      answer: 3,
      explanation: "Encryption is a security feature, not a basic database operation."
    },
    {
      question: "What does 'updation' refer to in database operations?",
      options: [
        "Changing the database structure",
        "Adding new records",
        "Modifying existing records",
        "Deleting records"
      ],
      answer: 2,
      explanation: "Updation means modifying existing records in a database."
    },
    {
      question: "What does 'modification' refer to in database operations?",
      options: [
        "Changing the database schema/structure",
        "Updating existing records",
        "Inserting new records",
        "Deleting records"
      ],
      answer: 0,
      explanation: "Modification refers to changes in the database schema or structure."
    },
    {
      question: "Who can perform all operations in a database?",
      options: [
        "End User",
        "Database Administrator (DBA)",
        "Software Developer",
        "System Analyst"
      ],
      answer: 1,
      explanation: "The DBA has full privileges and can perform all operations."
    },
    {
      question: "What is the difference between schema and instance?",
      options: [
        "Schema is data, instance is structure",
        "Schema is snapshot, instance is design",
        "Schema is structure/design, instance is snapshot",
        "Both are the same"
      ],
      answer: 2,
      explanation: "Schema defines the design/structure, while an instance is a snapshot at a given time."
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Question Language",
        "Standard Query Language",
        "Structured Query Language",
        "Standard Question Logic"
      ],
      answer: 2,
      explanation: "SQL stands for Structured Query Language."
    },
    {
      question: "Who developed SQL?",
      options: ["Bill Gates", "Edgar F. Codd", "Larry Ellison", "Tim Berners-Lee"],
      answer: 1,
      explanation: "SQL was developed based on Edgar F. Codd's relational model."
    },
    {
      question: "What is a primary key?",
      options: [
        "A key that can be NULL",
        "A key that may have duplicate values",
        "A unique identifier for records in a table",
        "There can be multiple primary keys in a table"
      ],
      answer: 2,
      explanation: "A primary key uniquely identifies records in a table."
    },
    {
      question: "Which of the following is TRUE about primary keys?",
      options: [
        "It can be NULL",
        "A table can have multiple primary keys",
        "It must be unique for each record",
        "It is optional for database tables"
      ],
      answer: 2,
      explanation: "A primary key must be unique for every record and cannot be NULL."
    },
    {
      question: "Which of these could be an example of a primary key?",
      options: ["Student Name", "Student Subject", "Roll Number", "Phone Number"],
      answer: 2,
      explanation: "Roll Number is a common example of a primary key as it uniquely identifies each student."
    },
    {
      question: "In SQL, what does the WHERE clause specify?",
      options: [
        "Which table to query",
        "Which columns to display",
        "Which records to select",
        "The order of results"
      ],
      answer: 2,
      explanation: "The WHERE clause specifies conditions to select records."
    },
    {
      question: "What is the purpose of a 'terminator' in SQL?",
      options: [
        "To begin a query",
        "To end a query",
        "To specify conditions",
        "To select all columns"
      ],
      answer: 1,
      explanation: "A terminator (e.g., semicolon) is used to end a query in SQL."
    },
    {
      question: "Which operation is performed when a user fills and submits a form?",
      options: ["Deletion", "Updation", "Insertion", "Modification"],
      answer: 2,
      explanation: "Submitting a form usually performs an Insertion of new records."
    },
    {
      question: "What operations can an end user perform?",
      options: [
        "All operations without restrictions",
        "Only read operations",
        "Only those allowed by the DBA",
        "Only insertion operations"
      ],
      answer: 2,
      explanation: "End users can only perform operations permitted by the DBA."
    }
  ]
};
