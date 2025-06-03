// async function parseIdfromReferrer(url) {
//   if (!url) return parseIdfromReferrer(window.location.href);

//   const parsedUrl = new URL(url);
//   let localId = localStorage.getItem("userId");
//   let parsedId = parsedUrl.searchParams.get("id");
//   let session = parsedUrl.searchParams.get("session");

//   let id = parsedId || localId || generateRandomString();

//   let extractedID = extractSessionID(session);
//   console.log("ID:: ", id, session_id, Number(extractedID));
//   localStorage.setItem("userId", id);

//   session_id = Number(extractedID);
//   console.log("SESSION ID:: ", session_id);

//   // If the URL doesn't have "id" or "session", update it
//   if (!parsedId || !session) {
//     updateUrlParams(id, session || "week_1_arm_1");
//   }

//   return id;
// }

// function extractSessionID(str) {
//   // Use a regular expression to find the number after 'week_'
//   const match = str.match(/week_(\d+)_/);
//   if (match) {
//     return match[1]; // Return the captured session ID
//   } else {
//     return null; // Return null if no match is found
//   }
// }



// // In case u need to add more params to the URL, use this function and pass more params
// function updateUrlParams(customId, sessionId) {
//   const baseUrl = window.location.origin + window.location.pathname;
//   let urlParams = new URLSearchParams(window.location.search);

//   urlParams.set("id", customId);
//   if (sessionId) {
//     urlParams.set("session", sessionId);
//   }

//   const updatedUrl = `${baseUrl}?${urlParams.toString()}`;
//   window.location.href = updatedUrl;
// }

// function generateRandomString() {
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var uniqueChars = [];

//   while (uniqueChars.length < 5) {
//     var randomIndex = Math.floor(Math.random() * alphabet.length);
//     var randomChar = alphabet[randomIndex];

//     if (!uniqueChars.includes(randomChar)) {
//       uniqueChars.push(randomChar);
//     }
//   }

//   var randomString = uniqueChars.join("");
//   return "RANDOM_" + randomString;
// }

// function updateUrlWithCustomId(customId) {
//   var baseUrl = window.location.origin + window.location.pathname;
//   var updatedUrl;

//   console.log("BASE URL:: ", baseUrl);

//   if (window.location.search.indexOf("id=") !== -1) {
//     updatedUrl = window.location.href.replace(
//       /([?&])id=([^&]*)/,
//       "$1id=" + customId
//     );
//   } else {
//     updatedUrl = baseUrl + "?id=" + customId;
//   }

//   window.location.href = updatedUrl;
// }

// parseIdfromReferrer(document.referrer);





// All the above code is moved to day1.config.js file

var timeline = [];

/* define instructions */

var browser_warning = {
  type: "html-button-response",
  stimulus:
    '<div class="instructions">' +
    "<p>To complete this task you will need to use Chrome, Firefox, Edge, or Safari.</p>" +
    "<p>Internet Explorer is not supported.</p>" +
    "</div>",
  choices: ["I am using a supported browser."],
  data: { task: "instructions" },
  on_finish: function (data) {
    // clear the stimulus to save space in the data object
    data.stimulus = null;
  },
};

var start_instructions = {
  timeline: [
    {
      type: "html-button-response",
      stimulus:
        '<div class="instructions">' +
        "<p>You will be presented with two pictures on the screen and you have to choose one of them by clicking on it.</p>" +
        "<p>One of the pictures will be followed by a reward (thumbs up) more often than the other one and this will change as the game goes on. You have to pick the picture that you think is giving you reward at that time and your objective is to get as many thumbs-up (rewards) and as little thumbs-down (punishments) as you can.</p><p>The pictures will be on the screen only for a short while and you have to make your responses within this time.</p>" +
        "</div>",
      choices: ["Continue"],
      on_finish: function (data) {
        // clear the stimulus to save space in the data object
        data.stimulus = null;
      },
    },
    {
      type: "html-button-response",
      stimulus:
        '<div class="instructions">' +
        "<p>First, you will complete a practice round.</p><p>For the practice round, there will be no associations between the pictures and the reward or punishment. The goal of the practice is to get you acquainted the type of stimuli that you will be seeing and the general format of the game.</p>" +
        "</div>",
      choices: ["Begin Practice"],
      on_finish: function (data) {
        // clear the stimulus to save space in the data object
        data.stimulus = null;
      },
    },
  ],
  data: { task: "instructions" },
};

var pre_affective_rating_instructions = {
  type: "html-button-response",
  stimulus:
    '<div class="instructions">' +
    "<p>Now we will ask you a set of questions about how you are feeling at the moment.</p>" +
    "</div>",
  choices: ["Start questions"],
  data: { task: "instructions" },
  on_finish: function (data) {
    // clear the stimulus to save space in the data object
    data.stimulus = null;
  },
};

var pre_task_instructions = {
  type: "html-button-response",
  stimulus:
    '<div class="instructions">' +
    "<p>The main task will begin now.</p>" +
    "<p>Remember, one of the pictures will be followed by a reward (thumbs up) more often than the other one and this will change as the game goes on. You have to pick the picture that you think is giving you reward at that time and your objective is to get as many thumbs-up (rewards) and as little thumbs-down (punishments) as you can.</p>" +
    "</div>",
  choices: ["Begin"],
  data: { task: "instructions" },
  on_finish: function (data) {
    // clear the stimulus to save space in the data object
    data.stimulus = null;
  },
};

var pre_picture_rating_instructions = {
  type: "html-button-response",
  stimulus:
    '<div class="instructions">' +
    "<p>All done! Now we will ask a short set of questions about the task you just completed.</p>" +
    "</div>",
  choices: ["Continue"],
  data: { task: "instructions" },
  on_finish: function (data) {
    // clear the stimulus to save space in the data object
    data.stimulus = null;
  },
};

var completed_instructions = {
  type: "html-button-response",
  stimulus:
    '<div class="instructions">' +
    "<p>Thanks for completing the game! Close the browser.</p>" +
    "</div>",
  choices: [], //["Next Game"],
  //data: { task: "instructions" },
  // on_finish: function (data) {
  //   // clear the stimulus to save space in the data object
  //   data.stimulus = null;
  //   let userId = localStorage.getItem("userId");
  //   let targetUrl =
  //     "http://implicit-bias-tmb-master.s3-website-us-east-1.amazonaws.com/?id=" +
  //     userId;
  //   window.location.href = targetUrl;
  // },
};



/* create the affective rating scales */

var affective_ratings = [
  {
    type: "html-slider-response",
    stimulus: "<p>How are you feeling at the moment?</p>",
    labels: ["Hostile", "Neutral", "Friendly"],
    slider_width: 250,
    data: { question: "Hostile-Friendly" },
  },
  {
    type: "html-slider-response",
    stimulus: "<p>How are you feeling at the moment?</p>",
    labels: ["Sad", "Neutral", "Happy"],
    slider_width: 250,
    data: { question: "Sad-Happy" },
  },
  {
    type: "html-slider-response",
    stimulus: "<p>How are you feeling at the moment?</p>",
    labels: ["Tensed", "Neutral", "Relaxed"],
    slider_width: 250,
    data: { question: "Tensed-Relaxed" },
  },
  {
    type: "html-slider-response",
    stimulus: "<p>How are you feeling at the moment?</p>",
    labels: ["Withdrawn", "Neutral", "Social"],
    slider_width: 250,
    data: { question: "Withdrawn-Social" },
  },
];

var ar_start = {
  timeline: affective_ratings,
  data: {
    task: "affective_ratings",
    phase: "start",
  },
};

var ar_end = {
  timeline: affective_ratings,
  data: {
    task: "affective_ratings",
    phase: "end",
  },
};

/* create the RL task */

var fixation_trial = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:48px;">+</p>',
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
};

var clicked;
var cue_trial = {
  type: "html-button-response",
  choices: jsPsych.timelineVariable("cues"),
  stimulus: "", //'<p>Select a picture.</p>',
  button_html: '<img class="cue" src="%choice%"></img>',
  post_trial_gap: 0,
  margin_vertical: "20px",
  margin_horizontal: "0px",
  response_ends_trial: false,
  trial_duration: 1500,
  data: {
    rewarding_choice: jsPsych.timelineVariable("rewarding_choice"),
    img_0: function () {
      return jsPsych.timelineVariable("cues", true)[0];
    },
    img_1: function () {
      return jsPsych.timelineVariable("cues", true)[1];
    },
    task: "rl-select",
  },
  on_load: function () {
    clicked = false;
    var img_btns = jsPsych.getDisplayElement().querySelectorAll("img");
    for (var i = 0; i < img_btns.length; i++) {
      img_btns[i].addEventListener("click", function (e) {
        if (!clicked) {
          e.target.style.filter = "grayscale(100%)";
          clicked = true;
        }
      });
    }
  },
  on_finish: function (data) {
    if (data.button_pressed !== null) {
      data.rewarded = data.button_pressed == data.rewarding_choice;
    } else {
      data.rewarded = null;
    }
  },
};

var feedback_trial = {
  type: "html-keyboard-response",
  stimulus: function () {
    var reward = jsPsych.data.get().last(1).values()[0].rewarded;
    if (reward == null) {
      return "<p>No response detected. Please respond faster.</p>";
    }
    if (reward == true) {
      return "<img src='img/thumbs_up.png' class='feedback'></img>";
    }
    if (reward == false) {
      return "<img src='img/thumbs_down.png' class='feedback'></img>";
    }
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 1500,
};

var practice_block = {
  timeline: [
    {
      timeline: [fixation_trial, cue_trial, feedback_trial],
      timeline_variables: [
        { rewarding_choice: 0, cues: [practice_img_1, practice_img_2] },
        { rewarding_choice: 1, cues: [practice_img_1, practice_img_2] },
      ],
      data: { block: "practice" },
      sample: {
        type: "custom",
        fn: function () {
          var total_trials = 10;
          var p_reward_0 = 0.5;
          var sample = jsPsych.randomization.shuffle(
            Array(total_trials)
              .fill(0, 0, total_trials * p_reward_0)
              .fill(1, total_trials * p_reward_0)
          );
          return sample;
        },
      },
    },
    {
      timeline: [
        {
          type: "html-button-response",
          stimulus:
            "<p>You didn't respond on a few trials. You have to make your choice faster. Let's try the practice again.</p>",
          choices: ["Start practice"],
        },
      ],
      conditional_function: function () {
        var slow_trials = jsPsych.data
          .get()
          .filter({ block: "practice", task: "rl-select" })
          .last(10)
          .filter({ rewarded: null })
          .count();
        return slow_trials >= 3;
      },
    },
  ],
  loop_function: function () {
    var slow_trials = jsPsych.data
      .get()
      .filter({ block: "practice", task: "rl-select" })
      .last(10)
      .filter({ rewarded: null })
      .count();
    return slow_trials >= 3;
  },
};

var block_1 = {
  timeline: [fixation_trial, cue_trial, feedback_trial],
  timeline_variables: [
    { rewarding_choice: 0, cues: [test_img_1, test_img_2] },
    { rewarding_choice: 1, cues: [test_img_1, test_img_2] },
    { rewarding_choice: 0, cues: [test_img_2, test_img_1] },
    { rewarding_choice: 1, cues: [test_img_2, test_img_1] },
  ],
  sample: {
    type: "custom",
    fn: function () {
      return [
        0, 0, 0, 2, 3, 0, 3, 3, 0, 1, 0, 0, 3, 0, 3, 1, 1, 0, 0, 0, 2, 2, 1, 2,
        2, 1, 3, 2, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0, 2, 3, 0, 1, 0, 0, 1, 2,
        0, 2, 0, 3, 1, 0, 1, 0, 2, 2, 2, 3, 0, 3, 1, 0, 3, 3, 0, 0, 3, 1, 0, 2,
        0, 3, 3, 0, 1, 0, 0, 0,
      ];
    },
  },
};

/* create the picture rating tasks */

var picture_select_task = {
  type: "html-button-response",
  choices: [test_img_1, test_img_2],
  stimulus: function () {
    return (
      "<p>During the " +
      jsPsych.timelineVariable("phase", true) +
      " of the task, which picture gave you more thumbs up?</p>"
    );
  },
  button_html: '<img class="cue" src="%choice%"></img>',
  post_trial_gap: 1000,
  margin_vertical: "20px",
  margin_horizontal: "0px",
  data: {
    question: "picture-select",
    phase: jsPsych.timelineVariable("phase"),
  },
};

var picture_confidence_task = {
  type: "html-slider-response",
  stimulus: function () {
    var which_image = jsPsych.data.get().last(1).values()[0].button_pressed;
    var stim = "<div>" + "<p>How certain are you?</p>";
    if (which_image == 1) {
      stim +=
        '<img src="' +
        test_img_1 +
        '" class="cue mini"></img>' +
        '<img src="' +
        test_img_2 +
        '" class="cue mini gs"></img>';
    }
    if (which_image == 0) {
      stim +=
        '<img src="' +
        test_img_2 +
        '" class="cue mini"></img>' +
        '<img src="' +
        test_img_1 +
        '" class="cue mini gs"></img>';
    }
    stim += "</div>";
    return stim;
  },
  prompt: "",
  labels: ["0%", "100%"],
  slider_width: 250,
  post_trial_gap: 1000,
  data: {
    question: "picture-confidence",
    phase: jsPsych.timelineVariable("phase"),
  },
};

var picture_rating_procedure = {
  timeline: [picture_select_task, picture_confidence_task],
  timeline_variables: [
    { phase: "START" },
    { phase: "MIDDLE" },
    { phase: "END" },
  ],
  data: {
    task: "picture-rating",
  },
};

/* create the final survey */

var post_survey = {
  timeline: [
    {
      type: "html-slider-response",
      stimulus:
        "<p>Please rate how you felt after receiving the thumbs up.</p>",
      labels: ["Negative", "Neutral", "Positive"],
      slider_width: 250,
      data: { question: "feeling-valence-reward" },
    },
    {
      type: "html-slider-response",
      stimulus: "<p>Please rate the intensity of this feeling.</p>",
      labels: ["Low", "Mid", "High"],
      slider_width: 250,
      data: { question: "feeling-intensity-reward" },
    },
    {
      type: "html-slider-response",
      stimulus:
        "<p>Please rate how you felt after receiving the thumbs down.</p>",
      labels: ["Negative", "Neutral", "Positive"],
      slider_width: 250,
      data: { question: "feeling-valence-punishment" },
    },
    {
      type: "html-slider-response",
      stimulus: "<p>Please rate the intensity of this feeling.</p>",
      labels: ["Low", "Mid", "High"],
      slider_width: 250,
      data: { question: "feeling-intensity-punishment" },
    },
    {
      type: "html-slider-response",
      stimulus:
        "<p>How well did you think you performed during the game? (How many thumbs up did you get?)</p>",
      labels: ["None", "All the time"],
      slider_width: 250,
      data: { question: "performance" },
    },
  ],
  data: {
    task: "post-survey",
  },
};

/* data push to server */

var save_data = {
  type: "call-function",
  func: function () {
    var results = jsPsych.data
      .get()
      .ignore("internal_node_id")
      .ignore("key_press")
      .values();
    var score = 0;
    var outcomes = {};
    let totalDuration = Math.floor(
      results[results.length - 1].time_elapsed / 1000
    );
    console.log("RESULTS:: ", results, score, outcomes, session_id);
    async function fetchData() {
      try {
        // Fetching User ID from the URL
        const userId = await parseIdfromReferrer(document.referrer)
        const apiResult = await fetch(
          "https://9d9tq22ivg.execute-api.us-east-1.amazonaws.com/default/socialrl-aws-session-bipolar",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify({
              results,
              score,
              outcomes,
              userId: userId,
              sessionId: session_id, // Add the session ID in order to send in payload
              totalDuration,
            }),
          }
        );

        // Handle the response
        // ...

        return apiResult; // Return the result if needed
      } catch (error) {
        console.log("ERROR:: ", error);
        // Handle errors
        // ...
      }
    }

    // Call the fetchData function and handle the result
    fetchData()
      .then((apiResult) => {
        console.log("API Result::", apiResult);
        // Handle the apiResult
        // ...
      })
      .catch((error) => {
        // Handle errors
        // ...
      });

    //jsPsych.data.get().ignore("internal_node_id").ignore("key_press").localSave('csv', 'sample-social-rl-data.csv')
  },
};

//const apiResult = await fetch(
//"https://um4uq1ad0f.execute-api.us-east-1.amazonaws.com/default/socialrl-online-tmb-master",
//{
//method: "POST",
//headers: {
//Accept: "application/json",
//"Content-Type": "application/json",
//},
//mode: "no-cors",
//body: JSON.stringify({ results,score,outcomes,   userId: generateRandomString(), totalDuration }),
//}
//);
//console.log("API Result::", apiResult);
//tmbSubmitToServer(results,score,outcomes);

//jsPsych.data.get().ignore("internal_node_id").ignore("key_press").localSave('csv', 'sample-social-rl-data.csv')
//},
//};

/* build the the experiment timeline */

timeline.push(browser_warning);
timeline.push(start_instructions);
timeline.push(practice_block);
timeline.push(pre_affective_rating_instructions);
timeline.push(ar_start);
timeline.push(pre_task_instructions);
timeline.push(block_1);
timeline.push(pre_picture_rating_instructions);
timeline.push(picture_rating_procedure);
timeline.push(post_survey);
timeline.push(pre_affective_rating_instructions);
timeline.push(ar_end);
timeline.push(save_data);
timeline.push(completed_instructions);

jsPsych.init({
  timeline: timeline,
  preload_images: [
    practice_img_1,
    practice_img_2,
    test_img_1,
    test_img_2,
    "img/thumbs_down.png",
    "img/thumbs_up.png",
  ],
});
