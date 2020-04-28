import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { simpleAction } from "../Actions/parentActions";
import classnames from "classnames";

function Icing(props) {
  const parentReducer = useSelector((state) => state.parentReducer);
  const currentStage = parentReducer.stages.find((x) => x.Id === 3);
  const dispatch = useDispatch();
  const [cremeActive, setCremeActive] = useState(true);
  const colors = [
    { Id: 1, Color: "rgb(255, 163, 215)" },
    { Id: 2, Color: "rgb(203, 68, 72)" },
    { Id: 3, Color: "rgb(45, 165, 75)" },
  ];
  const handleIcingChange = (cremeActive) => {
    setCremeActive(cremeActive);
    dispatch(simpleAction(parentReducer.stages, 3, cremeActive ? 1 : 2, 1));
  };
  return (
    <div className="icing">
      <div className="body-row">
        <div className="type">
          <div
            className={classnames({
              radio: true,
              active: currentStage.ActiveIcing.Type === 1,
            })}
            onClick={() => handleIcingChange(true)}
          ></div>
          <span>Buttercreme style</span>
        </div>
        {cremeActive ? (
          <div className="color">
            {colors.map((x) => {
              return (
                <span
                  style={{ background: x.Color }}
                  key={x.Id}
                  className={classnames({
                    active: currentStage.ActiveIcing.Color === x.Id,
                  })}
                  onClick={() => {
                    dispatch(simpleAction(parentReducer.stages, 3, 1, x.Id));
                  }}
                ></span>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="body-row">
        <div className="type">
          <div
            className={classnames({
              radio: true,
              active: currentStage.ActiveIcing.Type === 2,
            })}
            onClick={() => handleIcingChange(false)}
          ></div>
          <span>Whipped</span>
        </div>
        {!cremeActive ? (
          <div className="color">
            {colors.map((x) => {
              return (
                <span
                  style={{ background: x.Color }}
                  key={x.Id}
                  className={classnames({
                    active: currentStage.ActiveIcing.Color === x.Id,
                  })}
                  onClick={() => {
                    dispatch(simpleAction(parentReducer.stages, 3, 2, x.Id));
                  }}
                ></span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Icing;
