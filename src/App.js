import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCount } from "./store/slices/countSlice";

const App = ({ count, dsetCount }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 pt-5">
            <div className="card">
              <div className="card-body">
                <div className="display-1">{count}</div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="flex-fill btn btn-danger me-1"
                    onClick={() => dsetCount(count - 1)}
                  >
                    Dec
                  </button>
                  <button
                    type="button"
                    className="flex-fill btn btn-success ms-1"
                    onClick={() => dsetCount(count + 1)}
                  >
                    Inc
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  dsetCount: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  count: state.count.value,
});

const mapDispatch = (dispatch) => ({
  dsetCount: (p) => dispatch(setCount(p)),
});

export default connect(mapState, mapDispatch)(App);
