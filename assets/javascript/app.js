$(document).ready(function() {
  // console.log( "ready!" );

  // track which question we are on
  var questionCounter = 0;
  // initial time of 15 seconds for each question
  var time = 15;
  // will keep tally of right guesses for end game
  var correctGuesses = 0;
  //will keep tally of wrong guesses for end game
  var incorrectGuesses = 0;

  // question & answer array
  var questions = [
    {
      question:
        "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
      choices: ["4", "5", "6", "3"],
      correctAnswer: "5",
      image:
        "<img src='assets/images/starkchildren.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "What does khaleesi mean?",
      choices: ["Warrior", "Wife of Khal", "Mother", "Queen"],
      correctAnswer: "Wife of Khal",
      image:
        "<img src='assets/images/khaleesi.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "What is the surname given to bastards born in Dorne?",
      choices: ["Sand", "Stone", "Rivers", "Mountain"],
      correctAnswer: "Sand",
      image:
        "<img src='assets/images/Sands.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "'The Mountain' is the nickname for which character'",
      choices: [
        "Gregor Clegane",
        "Sandor Clegane",
        "Gerold Clegane",
        "Oberyn Martell"
      ],
      correctAnswer: "Gregor Clegane",
      image:
        "<img src='assets/images/GregorClegane.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "Who was the Mad King's firstborn son?",
      choices: [
        "Aemon Targaryen",
        "Aegon Targaryen",
        "Rhaegar Targaryen",
        "Viserys Targaryen"
      ],
      correctAnswer: "Rhaegar Targaryen",
      image:
        "<img src='assets/images/scum.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "What is the name of Arya Stark's sword?",
      choices: ["Icicle", "Nymeria", "Needle", "Lion's Bane"],
      correctAnswer: "Needle",
      image:
        "<img src='assets/images/needle.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question:
        "Who is the first character in the series to be called 'King in the North'?",
      choices: ["Jon Snow", "Ned Stark", "Robb Stark", "Edmure Tully"],
      correctAnswer: "Robb Stark",
      image: "<img src='assets/images/RobbStark.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "Which house has a rose as its sigil?",
      choices: ["Tully", "Lannister", "Tyrell", "Greyjoy"],
      correctAnswer: "Tyrell",
      image:
        "<img src='assets/images/Tyrell.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "Who is executed via molten gold?",
      choices: [
        "Tywin Lannister",
        "Robert Baratheon",
        "Khal Drogo",
        "Viserys Targaryen"
      ],
      correctAnswer: "Viserys Targaryen",
      image:
        "<img src='assets/images/MoltenGold.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "Who is Sansa Stark's first fiance?",
      choices: [
        "Tyrion Lannister",
        "Joffrey Baratheon",
        "Loras Tyrell",
        "Tommen Baratheon"
      ],
      correctAnswer: "Joffrey Baratheon",
      image:
        "<img src='assets/images/sansa.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "What is Jon Snow's real name??",
      choices: ["Jon", "Aerys", "Aegon", "Rhaegar"],
      correctAnswer: "Aegon",
      image:
        "<img src='assets/images/Aegon.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "Whose court does Tyrion Lannister ultimately join??",
      choices: [
        "Daenerys Targaryen",
        "Robb Stark",
        "Stannis Baratheon",
        "Jon Snow"
      ],
      correctAnswer: "Daenerys Targaryen",
      image:
        "<img src='assets/images/squad.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question:
        "When Joffrey has another one of his tantrums, what does Tyrion do?",
      choices: [
        "Scold him in front of the court",
        "Pour ale on his head",
        "Slap him",
        "Nothing, Joffrey is the king!"
      ],
      correctAnswer: "Slap him",
      image:
        "<img src='assets/images/ShouldaAborted.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "What language do Red Priests and Priestesses use?",
      choices: ["Old Tongue", "Ghiscari", "High Valyrian", "Asshai'i"],
      correctAnswer: "High Valyrian",
      image:
        "<img src='assets/images/BigRed.jpg' class='img-circle shadow pic-resize'>"
    },
    {
      question: "According to the show, how much does Jon Snow know?",
      choices: ["Nothing", "Everything", "A bit", "Not a lot"],
      correctAnswer: "Nothing",
      image:
        "<img src='assets/images/KnowNothing.jpg' class='img-circle shadow pic-resize'>"
    }
  ];

  // create question contents according to question count
  function questionContent() {
    // a for loop would be cool here...
    $("#gameScreen").append(
      "<p><strong>" +
        questions[questionCounter].question +
        "</p><p class='choices'>" +
        questions[questionCounter].choices[0] +
        "</p><p class='choices'>" +
        questions[questionCounter].choices[1] +
        "</p><p class='choices'>" +
        questions[questionCounter].choices[2] +
        "</p><p class='choices'>" +
        questions[questionCounter].choices[3] +
        "</strong></p>"
    );
  }

  // user guessed correctly
  function userWin() {
    $("#gameScreen").html("<p>You got it right!</p>");
    correctGuesses++;
    var correctAnswer = questions[questionCounter].correctAnswer;
    $("#gameScreen").append(
      "<p>The answer was <span class='answer'>" +
        correctAnswer +
        "</span></p>" +
        questions[questionCounter].image
    );
    setTimeout(nextQuestion, 4000);
    questionCounter++;
  }

  // user guessed incorrectly
  function userLoss() {
    $("#gameScreen").html("<p>Nope, that's not it!</p>");
    incorrectGuesses++;
    var correctAnswer = questions[questionCounter].correctAnswer;
    $("#gameScreen").append(
      "<p>The answer was <span class='answer'>" +
        correctAnswer +
        "</span></p>" +
        questions[questionCounter].image
    );
    setTimeout(nextQuestion, 4000);
    questionCounter++;
  }

  // user ran out of time
  function userTimeout() {
    if (time === 0) {
      $("#gameScreen").html("<p>You ran out of time!</p>");
      incorrectGuesses++;
      var correctAnswer = questions[questionCounter].correctAnswer;
      $("#gameScreen").append(
        "<p>The answer was <span class='answer'>" +
          correctAnswer +
          "</span></p>" +
          questions[questionCounter].image
      );
      setTimeout(nextQuestion, 4000);
      questionCounter++;
    }
  }

  // screen that shows final score and nice message :)
  function resultsScreen() {
    if (correctGuesses === questions.length) {
      var endMessage = "Perfection! Winter is Coming, but You're Ready!";
    } else if (correctGuesses > incorrectGuesses) {
      var endMessage = "You Might Just Make It Through Winter";
    } else {
      var endMessage = "The Night King Will Make Quick Work of You!";
      var bottomText = "#WinterIsComing";
    }
    $("#gameScreen").html(
      "<p>" +
        endMessage +
        "</p>" +
        "<p>You got <strong>" +
        correctGuesses +
        "</strong> right.</p>" +
        "<p>You got <strong>" +
        incorrectGuesses +
        "</strong> wrong.</p>"
    );
    $("#gameScreen").append("<h1 id='start'>Try Again?</h1>");
    $("#bottomText").html(bottomText);
    gameReset();
    $("#start").click(nextQuestion);
  }

  // game clock currently set to 15 seconds
  function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
      if (time < 1) {
        clearInterval(clock);
        userTimeout();
      }
      if (time > 0) {
        time--;
      }
      $("#timer").html("<strong>" + time + "</strong>");
    }
  }

  // moves question counter forward to show next question
  function nextQuestion() {
    if (questionCounter < questions.length) {
      time = 15;
      $("#gameScreen").html(
        "<p>You have <span id='timer'>" + time + "</span> seconds left!</p>"
      );
      questionContent();
      timer();
      userTimeout();
    } else {
      resultsScreen();
    }
    }

  // reset score and counter parameters on restart
  function gameReset() {
		$("#bottomText").remove();
    questionCounter = 0;
    correctGuesses = 0;
    incorrectGuesses = 0;
  }

  function startGame() {
    $("#gameScreen").html(
      "<p>You have <span id='timer'>" + time + "</span> seconds left!</p>"
    );
    $("#start").hide();
    questionContent();
    timer();
    userTimeout();
  }

  // this starts the game
  $("#start").click(nextQuestion);

  // click function to trigger right or wrong screen
  $("#gameScreen").on("click", ".choices", function() {
    // alert("clicked!");
    var userGuess = $(this).text();
    if (userGuess === questions[questionCounter].correctAnswer) {
      clearInterval(clock);
      userWin();
    } else {
      clearInterval(clock);
      userLoss();
    }
  });
});
