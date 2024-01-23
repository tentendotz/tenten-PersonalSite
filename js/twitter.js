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

/* MARK: - Twitter Timeline Generation
----------------------------------------------------- */
const targetContainer = document.querySelector(".twitter-viewer");

const dataSource = {
  sourceType: "profile",
  screenName: "tentenblog"
};

const options = {
  theme: "light",
  chrome: ["noheader", "nofooter"],
  width: 296,
  height: 366,
  tweetLimit: 2
};

twttr.widgets.createTimeline(dataSource, targetContainer, options);
