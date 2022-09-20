/* MARK: - Fade-in effect
----------------------------------------------------- */
const fadeInTarget = document.querySelectorAll(".container-fluid");

hidden();
window.addEventListener("load", fadeIn);

function hidden() {
  if (!fadeInTarget) return;
  for (var i = 0; i < fadeInTarget.length; i++) {
    fadeInTarget[i].classList.add("disappeared");
  }
}

function fadeIn() {
  if (!fadeInTarget) return;
  for (var i = 0; i < fadeInTarget.length; i++) {
    fadeInTarget[i].classList.add("show-off");
  }
}


/* MARK: - Twitter Script
----------------------------------------------------- */
window.twttr = (function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };

  return t;
})(document, "script", "twitter-wjs");

// For Twitter Timeline
const tweetContent = document.querySelector(".tweet-user-timeline");
twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "tentenblog",
  },
  tweetContent,
  {
    theme: "light",
    width: 300,
    tweetLimit: 2,
    chrome: "nofooter",
  }
);
