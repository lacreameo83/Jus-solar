import { FacebookProvider, CustomChat } from "react-facebook";

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId="8317609354989517" chatSupport>
        <CustomChat pageId="104015638377050" minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
