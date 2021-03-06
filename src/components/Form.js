import React, { useState } from "react"
import Question from "./Question"
import Pattern from "./Pattern"
import { Link } from "react-router-dom";

function Form(props) {
  const ANSWER_DATA = [
    [
      { imgsrc: "https://images.unsplash.com/photo-1577398577097-0ef7f248f0a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80", caption: "Neon green", photographer: "Thibault Milan", bucket: 0, questionID: "0" },
      { imgsrc: "https://images.unsplash.com/photo-1549575021-6a05b45de57a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80", caption: "Mauve", photographer: "Deleece Cook", bucket: 1, questionID: "0" },
      { imgsrc: "https://images.unsplash.com/photo-1568228945912-ec2673a7fef8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80", caption: "Sea green", photographer: "Chris Bayer", bucket: 2, questionID: "0" },
      { imgsrc: "https://images.unsplash.com/photo-1541724673942-6b2993cf1c81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80", caption: "Coral", photographer: "Rebecca Matthews", bucket: 3, questionID: "0" },
    ],
    [
      { imgsrc: "https://images.unsplash.com/photo-1453904061941-02ada96e1f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1910&q=80", caption: "Oval", photographer: "Andy White", bucket: 2, questionID: "1" },
      { imgsrc: "https://images.unsplash.com/photo-1530005650741-08aa02c24ff8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80", caption: "Rectangular prism", photographer: "Andreas Dress", bucket: 0, questionID: "1" },
      { imgsrc: "https://images.unsplash.com/photo-1517867065801-e20f409696b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80", caption: "Heart", photographer: "freestocks", bucket: 1, questionID: "1" },
      { imgsrc: "https://images.unsplash.com/photo-1487552292919-eccbbd948cba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80", caption: "Rhombus", photographer: "Ben Neale", bucket: 3, questionID: "1" },
    ],
    [
      { imgsrc: "https://images.unsplash.com/photo-1569219872862-58f96b8f1d65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG51bWJlciUyMHRocmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60", caption: "3", photographer: "max fuchs", bucket: 3, questionID: "2" },
      { imgsrc: "https://images.unsplash.com/photo-1595480603720-7ab5aa097a34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80", caption: "64", photographer: "Markus Spiske", bucket: 1, questionID: "2" },
      { imgsrc: "https://images.unsplash.com/photo-1595871263997-a1358d25d7ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", caption: "8", photographer: "samuel gembe", bucket: 2, questionID: "2" },
      { imgsrc: "https://images.unsplash.com/photo-1590436371576-488a4891b4b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80", caption: "37", photographer: "Scott Evans", bucket: 0, questionID: "2" },
    ],
    [
      { imgsrc: "https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1001&q=80", caption: "Winter", photographer: "Justin Kauffman", bucket: 1, questionID: "3" },
      { imgsrc: "https://images.unsplash.com/photo-1559150182-a7144f7628f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80", caption: "Spring", photographer: "Yoksel Zok", bucket: 3, questionID: "3" },
      { imgsrc: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80", caption: "Summer", photographer: "Ethan Robertson", bucket: 0, questionID: "3" },
      { imgsrc: "https://images.unsplash.com/photo-1477088139840-0f0a9cb47cce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80", caption: "Fall", photographer: "Courtney Read", bucket: 2, questionID: "3" },
    ],
  ];

  const QUESTION_DATA = [
    { isDisabled: true, id: "0", legend: "What's your favorite color?", answers: ANSWER_DATA[0] },
    { isDisabled: true, id: "1", legend: "Which shape is objectively the best?", answers: ANSWER_DATA[1] },
    { isDisabled: true, id: "2", legend: "Which number speaks to you?", answers: ANSWER_DATA[2] },
    { isDisabled: true, id: "3", legend: "What is the best season?", answers: ANSWER_DATA[3] },
  ];

  const [bucketTotal, setBucketTotal] = useState([0,0,0,0]);

  function handleClick(result, questionID) {
    if(!document.getElementById(questionID).disabled) {
      const buckets = bucketTotal.slice();
      buckets[result]++;
      setBucketTotal(buckets);
      document.getElementById(questionID).disabled = true;
      document.getElementById(questionID).style.backgroundColor = "#B8F2E6";
      document.getElementById((parseInt(questionID) + 1).toString()).scrollIntoView({ behavior: "smooth"});
    }
  }

  function displayResults() {
    const largest = bucketTotal.indexOf(Math.max(...bucketTotal));
    const thisResult = props.RESULTS_DATA[largest];

    return (
      <div>
        <p style={{fontSize: "2.5rem"}} >You got... {thisResult.result}!</p>
        <Pattern
          googleObj={props.googleObj}
          result={thisResult.result}
          imgsrc={thisResult.imgsrc}
          photographer={thisResult.photographer}
          url={thisResult.url}
          isResult={true}
        />
        <Link class="nav-link" to="/browse" style={{display: "inline-block", marginTop: "15px"}}>
          View all patterns
        </Link>
      </div>
    );
  }

  const questionList = QUESTION_DATA.map( question => (
      <div class="question">
        <Question
          id={question.id}
          legend={question.legend}
          answers={question.answers}
          onClick={handleClick}
        />
      </div>
  ));

  const renderResults = (bucketTotal.reduce(function(a, b){ return a + b; }, 0) < QUESTION_DATA.length) ? <div class="results" >Please select an answer for each question.</div> : displayResults();

  function resetQuiz() {
    //reset buckets
    setBucketTotal([0,0,0,0]);
    //set answers to be unclicked and clickable
    for (var i = 0; i < 4; i++) {
      document.getElementById(i).disabled = false;
      document.getElementById(i).style.backgroundColor = "#FFA69E";
    }
    document.getElementById(0).scrollIntoView({ behavior: "smooth"});
  }

  return (
    <form className="quiz">
      {questionList}
      <div className="results" id={bucketTotal.length} >
        {renderResults}
        <button type="reset" onClick={() => resetQuiz()}>Reset quiz</button>
      </div>
    </form>
  );
}

export default Form;