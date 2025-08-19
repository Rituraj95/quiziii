import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './style.css';
import { quiz1 } from './components/Internet/quiz1quetions';
import { quiz2 } from './components/Internet/quiz2quetions';
import { quiz3 } from './components/Internet/quiz3quetions';
import { quiz4 } from  './components/Internet/quiz4quetions';
import { quiz5 } from  './components/Internet/quiz5quetions';
import { quiz11} from './components/computerfoundamentals/quiz1'
import { quiz13} from './components/computerfoundamentals/quiz3'
import { quiz14} from './components/computerfoundamentals/quiz4'
import { quiz15} from './components/computerfoundamentals/quiz5'
import { quiz17} from './components/computerfoundamentals/quiz7'
import { quiz21} from './components/database/quiz1'
import { quiz22} from './components/database/quiz2'
import { quiz23} from './components/database/quiz3'
import { quiz24} from './components/database/quiz4'
import { quiz25} from './components/database/quiz5'











import { quiz12 } from './components/computerfoundamentals/quiz2';






function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizTitle, setQuizTitle] = useState('');

  const quizzes = {
    'Internet pdf 1': quiz1,
    'Internet pdf 2': quiz2,
    'Internet pdf 3': quiz3,
    'Internet pdf 4': quiz4,
    'Internet pdf 5': quiz5,
    'Computer Foundamental pdf 1': quiz11,
    'computer Foundamental pdf 2': quiz12,
    'computer Foundamental pdf 3': quiz13,
    'Computer Foundamental pdf 4': quiz14,
    'Computer Foundamental pdf 5': quiz15,
    // 'computer Foundamental pdf 6': quiz16,
    'Computer Foundamental pdf 7': quiz17,
    // 'Computer Foundamental pdf 8': quiz18,
    'DBMS pdf 1':quiz21,
    'DBMS pdf 2':quiz22,
    'DBMS pdf 3':quiz23,
    'DBMS pdf 4':quiz24,
    'DBMS pdf 5':quiz25


    



  };

  const startQuiz = (quizKey) => {
    setSelectedQuiz(quizzes[quizKey].questions);
    setQuizTitle(quizzes[quizKey].title);
    setQuizCompleted(false);
    setScore(0);
    setUserAnswers([]);
  };

  const completeQuiz = (finalScore, answers) => {
    setScore(finalScore);
    setUserAnswers(answers);
    setQuizCompleted(true);
  };

  const returnToQuizSelection = () => {
    setSelectedQuiz(null);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <h1>RRB PO/CLERK CA</h1>
      
      {!selectedQuiz ? (
        <div className="quiz-selection">
          <h2>Select a Quiz</h2>
          <div className="quiz-buttons">
            {Object.keys(quizzes).map((quizName) => (
              <button
                key={quizName}
                onClick={() => startQuiz(quizName)}
                className="quiz-option"
              >
                {quizName}
                {/* <p className="quiz-description">{quizzes[quizName].questions.length} questions</p> */}
              </button>
            ))}
          </div>
        </div>
      ) : !quizCompleted ? (
        <>
          <h2>{quizTitle}</h2>
          <Quiz 
            questions={selectedQuiz}
            completeQuiz={completeQuiz} 
          />
        </>
      ) : (
        <Result 
          score={score} 
          userAnswers={userAnswers}
          restartQuiz={returnToQuizSelection}
          quizTitle={quizTitle}
        />
      )}
    </div>
  );
}

export default App;