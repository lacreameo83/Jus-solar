"use clinent";
import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="425823590606925" minimized={false} />
      </FacebookProvider>{" "}
    </div>
  );
}

export default FacebookMessenger;
