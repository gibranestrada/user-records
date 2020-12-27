"use strict";
$(document).ready(function () {

  // Website main pages
  let PAGES = {
    main: {
      content: main, // imported from pagesContent.js
    },
    loading: {
      content: loading, //imported from pagesContent.js
    },
    results: {
      content: results, //imported from pagesContent.js
    },
    noResults: {
      content: noResults, //imported from pagesContent.js
    },
    page404: {
      content: page404, //imported from pagesContent.js
    },
  };
  // Dynamically add html to the DOM
  let body = document.querySelector("body")
  body.insertAdjacentHTML("beforebegin", nav);
  body.insertAdjacentHTML("beforeend", footer);
  
  let root = document.querySelector("#root");
  root.insertAdjacentHTML(
    "beforeend",
    PAGES.main.content(mainOptions.top[0], mainOptions.top[1], "top")
  );
  
  let trigger = false;

  //#########   Navigate by using windows.location.hash. Ex. #search ##########//
  //On hash change navigate() is fired
  let path;
  const navigate = () => {
    // Path gets the hash name
    path = location.hash.substr(1).toLowerCase().split("/");
    let div = document.getElementById("root");
    //Removes all content from #root div and fills in HTML from pagesContent.js
    while (div.firstChild && div.removeChild(div.firstChild));
    if (path[0] === "home") {
      root.insertAdjacentHTML(
        "beforeend",
        PAGES.main.content(mainOptions.top[0], mainOptions.top[1], "top")
      );
    } else if (path[0] === "search") {
      if (trigger) {
        trigger = false;
        root.insertAdjacentHTML("beforeend", PAGES.loading.content);
      } else {
        console.log(trigger);
        window.location.hash = "home";
      }
    } else if (path[0] === "no-results") {
      root.insertAdjacentHTML("beforeend", PAGES.noResults.content);
      root.insertAdjacentHTML(
        "beforeend",
        PAGES.main.content(
          mainOptions.bottom[0],
          mainOptions.bottom[1],
          "bottom"
        )
      );
    } else if (path[0] === "results") {
      root.insertAdjacentHTML("beforeend", PAGES.results.content(emailData));
      root.insertAdjacentHTML(
        "beforeend",
        PAGES.main.content(
          mainOptions.bottom[0],
          mainOptions.bottom[1],
          "bottom"
        )
      );
    } else {
      //If hash name is not found Navigate to 404 page
      root.insertAdjacentHTML("beforeend", PAGES.page404.content);
    }
    setEvents();
  };
  window.onhashchange = navigate;

  //##########   Email validation and GET request   ##########
  const setEvents = () => {
    $("#input-email").keypress(function (event) {
      if (event.keyCode == 13) {
        validateEmail();
      }
    });
    $(".submit-button").click(function () {
      validateEmail();
    });

    const validateEmail = () => {
      const email = $("#input-email");
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      const bool = regex.test(email.val());
      // Red error message box will appear below input field
      if (!bool) {
        email.removeClass("input-email").addClass("wrong-email");
        $(".error").removeClass("hide");
      }
      // Removes error message box if it's there. Also invokes emailGetRequest function.
      if (bool) {
        email.removeClass("wrong-email").addClass("input-email");
        $(".error").addClass("hide");
        // Navigate to search page
        window.location.hash = "search";
        trigger = true;
        emailGetRequest(email.val());
      }
    };
  };
  setEvents();
  let emailData;
  const emailGetRequest = async (email) => {
    await fetch(
      "https://ltv-data-api.herokuapp.com/api/v1/records.json?email=" + email
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data).length) {
          emailData = data;
          //Navigate to results page
          window.location.hash = "results";
        }
        if (!Object.keys(data).length) {
          //Navigate to no-results page
          window.location.hash = "no-results";
        }
      })
      .catch((e) => console.log(e));
  };
  //##############################################
});
