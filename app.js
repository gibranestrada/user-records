"use strict";

$(document).ready(function () {
  let PAGES = {
    main: {
      content: main, // imported from pagesContent.js
    },
    loading: {
      content: loading, //imported from pagesContent.js
    },
    results: {
      content: results,
    },
    noResults: {
      content: noResults,
    },
    page404: {
      content: page404,
    },
  };
  let root = document.querySelector("#root");
  root.insertAdjacentHTML(
    "beforeend",
    PAGES.main.content(mainOptions.top[0], mainOptions.top[1], "top")
  );
  let trigger = false;
  //##########   Email Input validation and Email Record GET request   ##########
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
    
      if (!bool) {
        email.removeClass("input-email").addClass("wrong-email");
        $(".error").removeClass("hide");
      }
      if (bool) {
        email.removeClass("wrong-email").addClass("input-email");
        $(".error").addClass("hide");
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
        console.log(data);
        if (Object.keys(data).length) {
          emailData = data;
          window.location.hash = "results";
        }
        if (!Object.keys(data).length) {
          window.location.hash = "no-results";
        }
      })
      .catch((e) => console.log(e));
  };
  //##############################################

  //#########   Websites pages ##########//

  let path;
  const navigate = () => {
    path = location.hash.substr(1).toLowerCase().split("/");
    let div = document.getElementById("root");
    while (div.firstChild && div.removeChild(div.firstChild));
    if (path[0] === "home") {
      root.insertAdjacentHTML(
        "beforeend",
        PAGES.main.content(mainOptions.top[0], mainOptions.top[1], "top")
      );
    } else if (path[0] === "search") {
      if(trigger){
        trigger = false;
        root.insertAdjacentHTML("beforeend", PAGES.loading.content);
      }else{
        console.log(trigger)
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
      root.insertAdjacentHTML("beforeend", PAGES.page404.content);
    }
    setEvents();
  };
  //navigate();
  window.onhashchange = navigate;
});
