import { Button } from "react-bootstrap";

export default function Homepage(props) {
  return (
    <div>
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facbook logo svg"
              srcset=""
            />
            <h4 class="text-center">
              Facebook helps you connect and share <br />
              with the people in your life.
            </h4>
          </div>
          <div class="col">
            <div class="card w-75 shadow">
              <div class="card-body">
                <input
                  type="text"
                  name="user"
                  id=""
                  placeholder="Email address or phone number"
                  class="form-control"
                />
                <input
                  type="password"
                  name="pass"
                  id=""
                  placeholder="password"
                  class="form-control"
                />
                <input
                  type="button"
                  value="Log in"
                  class="btn btn-primary w-100"
                />
                <a href="/forgot-password" class="d-block mx-auto w-50">
                  Forgotten password?
                </a>
                <hr class="" />

                <Button
                  id=""
                  className="btn btn-success w-50 d-flex mx-auto signup-btn"
                  variant="success"
                  onClick={() => props.setSignupModalShow(true)}
                >
                  Create new account
                </Button>
              </div>
            </div>
            <p class="text-center w-75 mt-3">
              <a href="#" id="create-page">
                <b>Create a page</b>
              </a>{" "}
              for celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
