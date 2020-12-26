const main = (title, text, position) => {
  return `<div class="heroContainer">
    <div id="hero" class="container text-center">
        <h1>${title}</h1>
        <h2>${text}</h2>
      <div>
        <input id="input-email" class="input-email" type="email" placeholder="EMAIL" />
        <p class="error hide">Please add a valid email address</p>
        <button type="submit" class="submit-button">GO!</button>
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
    ${
      position === "top"
        ? `<div class="container text-center main-content">
    <h3>Reverse Email Lookup</h3>
    <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.</p>
    <div class="row">
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-12 main-content-numbers">
            <div class="row justify-content-center">
              <div class="col-2 numbers">1</div>
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
</div>`
        : ""
    }
    
`;
};
const loading = `<div id="loading">
    <div class="container text-center">
    <div class="row align-items-center loader">
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
    <p class="results-none">0 result</p>
    <p class="try-again">Try starting a new search below</p>
  </div>
</div>
</div>
</div>`;

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
