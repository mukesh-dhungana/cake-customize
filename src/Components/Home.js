import React, { Component } from "react";
import { connect } from "react-redux";
import Images from "../image_imports";
import "../scss/home.scss";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";
import Flavour from "./Flavour";
import Filling from "./Filling";
import Icing from "./Icing";
import Decoration from "./Decoration";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveStageId: 1,
    };
  }
  leftArrowClick = () => {
    const { ActiveStageId } = this.state;
    this.setState({
      ActiveStageId: ActiveStageId > 1 ? ActiveStageId - 1 : ActiveStageId,
    });
  };
  rightArrowClick = () => {
    const { ActiveStageId } = this.state;
    this.setState({
      ActiveStageId: ActiveStageId < 4 ? ActiveStageId + 1 : ActiveStageId,
    });
  };

  render() {
    const { ActiveStageId } = this.state;
    const { stages } = this.props;
    const currentStage = stages.find((x) => x.Id === ActiveStageId);
    const prevStage = stages.find((x) => x.Id === ActiveStageId - 1);
    const nextStage = stages.find((x) => x.Id === ActiveStageId + 1);
    const ActiveFlavourId = stages.find((x) => x.Id === 1).ActiveFlavourId;
    const ActiveFillingId = stages.find((x) => x.Id === 2).ActiveFillingId;
    const ActiveIcingId = stages.find((x) => x.Id === 3).ActiveIcing.Color;
    const ActiveDecorationId = stages.find((x) => x.Id === 4).ActiveDecoration
      .Color;
    //debugger;
    return (
      <div className="cake-container">
        <div className="image-container">
          <img src={Images["Flavour" + ActiveFlavourId]} alt="1" />
          {ActiveFillingId !== 0 ? (
            <img src={Images["Filling" + ActiveFillingId]} alt="1" />
          ) : null}
          <img src={Images["Icing" + ActiveIcingId]} alt="1" />
          {ActiveDecorationId !== 0 ? (
            <img src={Images["Decoration" + ActiveDecorationId]} alt="1" />
          ) : null}
        </div>
        <div className="customize-stage">
          <div className="header">
            <span>{currentStage.Text}</span>
          </div>
          <div className="body">
            <GetStage ActiveStageId={ActiveStageId} />
          </div>
          <div className="footer">
            <RiArrowLeftCircleLine onClick={() => this.leftArrowClick()} />
            <span>{prevStage && prevStage.Text}</span>
            <span>{ActiveStageId}/4</span>
            <span>{nextStage && nextStage.Text}</span>
            <RiArrowRightCircleLine onClick={() => this.rightArrowClick()} />
          </div>
        </div>
      </div>
    );
  }
}
const GetStage = ({ ActiveStageId }) => {
  switch (ActiveStageId) {
    case 1:
      return <Flavour />;
      break;
    case 2:
      return <Filling />;
      break;
    case 3:
      return <Icing />;
      break;
    case 4:
      return <Decoration />;
      break;
    default:
      break;
  }
};

export default connect(
  (state) => ({
    stages: state.parentReducer.stages,
  }),
  {}
)(Home);
