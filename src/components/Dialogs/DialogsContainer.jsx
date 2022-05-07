import React from "react";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = ({ store }) => {
  // console.log("DialogsContainersprops", store);
  return (
    <StoreContext.Consumer>
      {() => {
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
