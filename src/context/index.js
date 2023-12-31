import React, { useEffect, useState } from "react";
import { getQuestions } from "../api";

export const context = React.createContext({
  data: [],
  questionData: [],
  setQuestionData: null
});

export const Provider = context.Provider;

export const Wrapper = (props) => {
  const [data, setData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const fetchData = async () => {
    try {
      const response = await getQuestions();
      const results = response.data.results;
      setData(results);
      const questions = results?.map((result, index) => {
        const options = [];
        options.push(result.incorrect_answers);
        options.push(result?.correct_answer);
        return {
          id: index + 1,
          category: result.category,
          type: result.type,
          difficulty: result.difficulty,
          question: result.question,
          correct_answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers,
          options: options.flat(),
          selectedAnswer: "",
          visited: false,
        };
      });
      const defaultQuestion = questions[0];
      defaultQuestion.visited = true;
      setSelectedQuestion(defaultQuestion);
      setQuestionData(questions);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    data,
    questionData,
    setQuestionData,
    selectedQuestion,
    setSelectedQuestion,
    name,
    setName,
    email,
    setEmail
  };

  return <Provider value={config}>{props.children}</Provider>;
};
