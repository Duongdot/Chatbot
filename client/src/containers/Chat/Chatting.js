import React from "react";

const Chatting = () => {
  return (
    <div className="container">
      <div className="row my-5">
        {/* <iframe
          title="..."
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/bbe51e01-a3c6-4b82-af1d-135ad535edfd"
        ></iframe> */}
        <iframe
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/94c0b85b-198f-47ce-ad5a-be55e6503609"
        ></iframe>
      </div>
    </div>
  );
};
export default Chatting;
