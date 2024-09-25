"use client";
import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId="8317609354989517" chatSupport>
        <CustomChat pageId="425823590606925" minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
