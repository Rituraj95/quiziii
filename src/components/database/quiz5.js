export const quiz25 = {
  title: "DBMS Lecture 5 (TCL, E-R Model & Misc.) Quiz",
  questions: [
    {
      question: "What does TCL stand for in the context of SQL?",
      options: [
        "Transaction Control Language",
        "Transaction Command Language",
        "Transfer Control Language",
        "Terminal Control Language"
      ],
      answer: 0,
      explanation: "TCL stands for Transaction Control Language, used to manage transactions in SQL."
    },
    {
      question: "Which TCL command is used to permanently save all changes made during a transaction?",
      options: ["SAVEPOINT", "COMMIT", "ROLLBACK", "GRANT"],
      answer: 1,
      explanation: "COMMIT is used to make all changes in a transaction permanent."
    },
    {
      question: "What is the purpose of the ROLLBACK command?",
      options: [
        "To provide user privileges",
        "To undo or reverse changes made during a transaction",
        "To create a savepoint in a transaction",
        "To delete a table"
      ],
      answer: 1,
      explanation: "ROLLBACK undoes all changes made during the current transaction."
    },
    {
      question: "What does an E-R Diagram stand for?",
      options: [
        "Electronic-Record Diagram",
        "Entity-Relationship Diagram",
        "Element-Relation Diagram",
        "Entry-Response Diagram"
      ],
      answer: 1,
      explanation: "E-R Diagram stands for Entity-Relationship Diagram, used to model databases."
    },
    {
      question: "In an E-R Diagram, what shape is used to represent an Entity?",
      options: ["Oval", "Diamond", "Rectangle", "Double Rectangle"],
      answer: 2,
      explanation: "Entities are represented by rectangles in an E-R diagram."
    },
    {
      question: "How is a Weak Entity represented in an E-R Diagram?",
      options: ["Single Rectangle", "Diamond", "Double Rectangle", "Double Oval"],
      answer: 2,
      explanation: "A weak entity is represented using a double rectangle."
    },
    {
      question: "Which symbol represents a Relationship in an E-R Diagram?",
      options: ["Rectangle", "Oval", "Diamond", "Double Line"],
      answer: 2,
      explanation: "Relationships are represented by diamonds in E-R diagrams."
    },
    {
      question: "An attribute that can be divided into smaller sub-parts is called a:",
      options: ["Derived Attribute", "Multi-valued Attribute", "Composite Attribute", "Key Attribute"],
      answer: 2,
      explanation: "Composite attributes can be divided into smaller attributes."
    },
    {
      question: "An attribute whose value can be calculated from another attribute is known as a:",
      options: ["Composite Attribute", "Multi-valued Attribute", "Derived Attribute", "Key Attribute"],
      answer: 2,
      explanation: "Derived attributes are calculated from other stored attributes."
    },
    {
      question: "What is a pictorial representation of an algorithm called?",
      options: ["E-R Diagram", "Database Schema", "Flowchart", "Tree Diagram"],
      answer: 2,
      explanation: "Flowcharts are used to visually represent algorithms."
    },
    {
      question: "In a flowchart, what shape is used to represent a decision or branching point?",
      options: ["Rectangle", "Parallelogram", "Diamond", "Oval"],
      answer: 2,
      explanation: "Diamonds represent decisions or branching points in a flowchart."
    },
    {
      question: "What does RAID stand for?",
      options: [
        "Redundant Array of Inexpensive Disks",
        "Random Access Independent Drives",
        "Redundant Access to Independent Data",
        "Rapid Array of Integrated Disks"
      ],
      answer: 0,
      explanation: "RAID stands for Redundant Array of Inexpensive Disks, used for data redundancy."
    },
    {
      question: "What does RDBMS stand for?",
      options: [
        "Relational Database Management System",
        "Rapid Data Backup Management System",
        "Redundant Database Management Service",
        "Relational Data Model System"
      ],
      answer: 0,
      explanation: "RDBMS stands for Relational Database Management System."
    },
    {
      question: "BCNF is also known as:",
      options: ["1st Normal Form", "2nd Normal Form", "3rd Normal Form", "3.5 Normal Form"],
      answer: 3,
      explanation: "BCNF is also referred to as the 3.5 Normal Form."
    },
    {
      question: "What does DKNF stand for?",
      options: [
        "Data Key Normal Form",
        "Domain Key Normal Form",
        "Database Kernel Normal Form",
        "Derived Key Normal Form"
      ],
      answer: 1,
      explanation: "DKNF stands for Domain Key Normal Form."
    },
    {
      question: "What is meant by 'Data Consistency' in a database?",
      options: [
        "Data is stored in a consistent format",
        "Changes to data are reflected everywhere in the database",
        "Data is backed up consistently",
        "Data is entered by consistent users"
      ],
      answer: 1,
      explanation: "Data consistency means all changes are reflected across the database."
    },
    {
      question: "What is the very first step of a database transaction?",
      options: ["Data Processing", "User Enquiry", "Data Commit", "Data Rollback"],
      answer: 1,
      explanation: "A transaction typically begins with a user enquiry or request."
    },
    {
      question: "Which of the following is NOT a component of an E-R Model?",
      options: ["Entity", "Relationship", "Algorithm", "Attribute"],
      answer: 2,
      explanation: "Algorithms are not part of an E-R Model."
    },
    {
      question: "In a flowchart, an oval shape represents:",
      options: ["Start/Stop", "Process", "Decision", "Input/Output"],
      answer: 0,
      explanation: "Ovals are used to represent start and stop points in flowcharts."
    },
    {
      question: "The main purpose of an E-R Diagram is to:",
      options: [
        "Write SQL queries",
        "Provide a graphical representation of the database structure",
        "Control user access",
        "Manage transactions"
      ],
      answer: 1,
      explanation: "E-R diagrams graphically represent the logical structure of a database."
    }
  ]
};
