// modified from https://codesandbox.io/s/jolly-lovelace-782jr?file=/src/Popup.js:0-654
// ref https://stackoverflow.com/questions/60994423/want-to-show-external-link-page-on-popup-in-react
// import React from "react";
import React from "preact/compat";
import "../../style/popup.scss";

class Popup extends React.Component {
  render() {
    let urlx = this.props.srcurl === "" ? " " : this.props.srcurl;
    const ctent =
      "<iframe id='loginpopup' width='100%' height='100%' scrolling='auto' src=" +
      urlx +
      " sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";

    return (
      <div className="popup" id="loginpopupdiv">
        <div className="popup_inner">
          <div id="ssodiv" dangerouslySetInnerHTML={{ __html: ctent }} />
          <button id="loginclose" onClick={() => {this.props.closePopup; this.props.onChange}}>Close</button>
        </div>
      </div>
    );
  }
}
export default Popup;

