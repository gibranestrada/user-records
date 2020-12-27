const main = (title, text, position) => {
  
  return `<div class="heroContainer">
  <div id="hero">
    <div class="container text-center">
        <h1>${title}</h1>
        <h2>${text}</h2>
      <div class="row">
       <div class="col-12 col-sm-9">
        <input id="input-email" class="input-email" type="email" placeholder="EMAIL" />
        <p class="error hide">Please add a valid email address</p>
        </div>
        <div class="col-12 col-sm-3">
        <button type="submit" class="submit-button">GO!</button>
        </div>
      </div>
      <div class="row justify-content-start lock">
        <div class="col-1">
          <img src="assets/SVGs/lock.svg" loading="lazy" alt="Lock" style="vertical-align:top">
        </div>
        <div class="col">
          <p class="secured">Enter Any Email Address. They won't be notified.</p>
        </div>
      </div>
    </div>
    </div>
    ${
      position === "top"
        ? `
        <div class="main-content">
        <div class="container text-center">
    <h3>Reverse Email Lookup</h3>
    <p class="text-left lookup-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 main-content-numbers">
            <div class="row justify-content-center">
              <div class="numbers">1</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="numbers">2</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="numbers">3</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="numbers">4</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="numbers">5</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="numbers">6</div>
              <div class="col-9 text-left main-title">
                <span>Lorem Ipsum</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore
                  et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>`
        : ""
    }
    
`;
};
const loading = `<div id="loading">
    <div class="container text-center">
    <div id="loader" class="row align-items-center loader">
      <div class="col-12"><img src="assets/loading_spinner.gif" alt="Loading spinner"><p>Please wait a moment...</p></div>
    </div>
  </div>
  </div>`;

const page404 = `
<div id="page-404">
<div class="container text-center">
<div class="row align-items-center loader">
  <div class="col-12">
    <p class="results-none">404</p>
    <p class="try-again">Page Not Found</p>
  </div>
</div>
</div>
</div>`;

const noResults = `
<div id="results-none-container">
<div class="container text-center">
<div class="row align-items-center loader">
  <div class="col-12">
    <p class="results-none">0 results</p>
    <p class="try-again">Try starting a new search below</p>
  </div>
</div>
</div>
</div>`;

const results = (data) => {
  //formatPhoneNumber will format the numbers to (000) 000-0000
  const formatPhoneNumber = (str) => {
    //Filter only numbers
    let cleaned = ("" + str).replace(/\D/g, "");

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return str;
  };
  const formated = data.phone_numbers
    .map((val) => formatPhoneNumber(val))
    .reduce((acc, val) => acc + "<br/>" + val);
  return `<div id="results-container">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col-12">
          <p class="results">1 result</p>
          <p class="results-text">Look at the result below to see the details of the person you've searched for.
          </p>
          <div class="card">
            <div class="row">
              <div class="col-12 col-md-2">
                <div class="img-background">
                  <img src="assets/SVGs/icn_person.svg" loading="lazy" alt="Account Icon - Round shape of a humans body" />
                </div>
              </div>
              <div class="col-12 col-md-10 text-left">
                <div class="card-title">
                  <p>${data.first_name} ${data.last_name}</p>
                  <p>${data.description}</p>
                </div>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <p class="card-info-title">Address</p>
                    <p class="card-info-desc">${data.address}</p>
                    <p class="card-info-title">Email</p>
                    <p class="card-info-desc">${data.email}</p>
                  </div>
                  <div class="col-12 col-sm-6">
                    <p class="card-info-title">Phone Numbers</p>
                    <p class="phone-numbers">${
                      data.phone_numbers.length ? formated : ""
                    }</p>
                    <p class="card-info-title">Relatives</p>
                    <p class="card-info-desc">${
                      data.relatives.length
                        ? data.relatives.reduce(
                            (acc, val) => acc + "<br/>" + val
                          )
                        : ""
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

const mainOptions = {
  top: [
    "Search Any Email Address",
    "<span>Start Here</span> - Look up the owner's name, photos and online profiles. See what you find!",
  ],
  bottom: [
    "Can’t Find The Right Person?",
    "<span>Try Again</span> - Make a new search",
  ],
};
