export const quiz23 = {
  title: "DBMS Lecture 3 (Keys) Quiz",
  questions: [
    {
      question: "Which of the following is a property of a Primary Key?",
      options: [
        "It can be NULL",
        "A table can have multiple primary keys",
        "It must be unique for each record",
        "It is used only for display purposes"
      ],
      answer: 2,
      explanation: "A Primary Key must be unique for each record and cannot be NULL."
    },
    {
      question: "A Foreign Key in a table is:",
      options: [
        "The main unique identifier of that table",
        "Always a numeric field",
        "A field that is a Primary Key in another table",
        "Used to store large text data"
      ],
      answer: 2,
      explanation: "A Foreign Key is a field in one table that refers to the Primary Key in another table."
    },
    {
      question: "What is the relationship enforced by a Foreign Key called?",
      options: [
        "Unique Constraint",
        "Referential Integrity Constraint",
        "Null Constraint",
        "Check Constraint"
      ],
      answer: 1,
      explanation: "Foreign Keys enforce Referential Integrity between tables."
    },
    {
      question: "According to the notes, what is NOT possible between database tables?",
      options: [
        "Foreign Key relationship",
        "Transitive Dependency",
        "Primary Key linkage",
        "Data insertion"
      ],
      answer: 1,
      explanation: "Transitive Dependency is not allowed between tables."
    },
    {
      question: "What is the key difference between a Primary Key and a Unique Key?",
      options: [
        "A Unique Key cannot have duplicates, a Primary Key can",
        "A Primary Key cannot be NULL, a Unique Key can have one NULL value",
        "A table can have only one Unique Key but multiple Primary Keys",
        "There is no difference; they are the same"
      ],
      answer: 1,
      explanation: "A Primary Key cannot be NULL, while a Unique Key can allow one NULL value."
    },
    {
      question: "A Candidate Key is best defined as:",
      options: [
        "A key that is a foreign key in another table",
        "Any field that can contain NULL values",
        "A field or set of fields eligible to be chosen as the Primary Key",
        "A key used for sorting data"
      ],
      answer: 2,
      explanation: "Candidate Keys are fields that can potentially be chosen as the Primary Key."
    },
    {
      question: "If a table has 3 Candidate Keys, how many possible subsets (Super Keys) are there?",
      options: ["3", "6", "8", "9"],
      answer: 2,
      explanation: "With 3 Candidate Keys, there are 2³ = 8 possible subsets, i.e., Super Keys."
    },
    {
      question: "An Alternate Key is defined as:",
      options: [
        "A backup for the Foreign Key",
        "A Candidate Key that was not chosen to be the Primary Key",
        "A key that alternates between two values",
        "The primary key of an alternate table"
      ],
      answer: 1,
      explanation: "An Alternate Key is any Candidate Key that was not selected as the Primary Key."
    },
    {
      question: "If the set of Candidate Keys is {Roll No., Account No., Email ID} and 'Roll No.' is chosen as the Primary Key, what is the set of Alternate Keys?",
      options: [
        "{Roll No.}",
        "{Account No., Email ID}",
        "{Account No.}",
        "{Email ID}"
      ],
      answer: 1,
      explanation: "The Alternate Keys are {Account No., Email ID}, as 'Roll No.' was chosen as the Primary Key."
    },
    {
      question: "What is the minimal Super Key also known as?",
      options: ["Foreign Key", "Candidate Key", "Alternate Key", "Composite Key"],
      answer: 1,
      explanation: "A minimal Super Key is called a Candidate Key."
    },
    {
      question: "The primary purpose of keys in a database is to:",
      options: [
        "Increase the storage space",
        "Provide a way to perform calculations",
        "Uniquely identify records and establish relationships between tables",
        "Change the database schema"
      ],
      answer: 2,
      explanation: "Keys ensure uniqueness and help establish relationships between tables."
    },
    {
      question: "In the relationship Student_1 -> Student_2, the 'Roll No.' in Student_2 is a:",
      options: ["Primary Key", "Candidate Key", "Foreign Key", "Alternate Key"],
      answer: 2,
      explanation: "The 'Roll No.' in Student_2 acts as a Foreign Key linking to Student_1."
    },
    {
      question: "Which key can be described as 'Primary Key + NULL'?",
      options: ["Foreign Key", "Super Key", "Unique Key", "Composite Key"],
      answer: 2,
      explanation: "A Unique Key is similar to a Primary Key but allows one NULL value."
    },
    {
      question: "The selection of a Primary Key from a set of Candidate Keys is analogous to:",
      options: [
        "A teacher taking attendance",
        "An election where a candidate is chosen",
        "A bank transaction",
        "Sorting books in a library"
      ],
      answer: 1,
      explanation: "Choosing a Primary Key is like an election where one candidate is selected from many."
    },
    {
      question: "The concept where if A->B and B->C, then A->C is not allowed in databases is called:",
      options: [
        "Referential Integrity",
        "Transitive Dependency",
        "Key Dependency",
        "Entity Integrity"
      ],
      answer: 1,
      explanation: "Transitive Dependency (A->B, B->C implies A->C) is not allowed in normalized databases."
    }
  ]
};
