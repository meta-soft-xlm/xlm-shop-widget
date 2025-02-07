import * as React from "react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { ShopContext, XLMContext } from "./context";
import EmbedRoute from "./routes/embed/Embed";
import { parseQuery } from "./utils/url";
// import { XummSdk } from "xumm-sdk";
// import { XummSdkJwt} from "xumm-sdk";
import albedo from "@albedo-link/intent";

const { shop = "" } = parseQuery(window.location.search);

function App() {
  // 2. Wrap ChakraProvider at the root of your app

  // console.log(wallet);

  // albedo
  //   .publicKey({
  //     token: "L5pxiBG+BtHjd6cAU7wPHXwshPNOaMKl8VKyojs6T10=",
  //   })
  //   .then((res) => console.log(res.pubkey, res.signed_message, res.signature));

  return (
    <ChakraProvider>
      <XLMContext.Provider value={{}}>
        <ShopContext.Provider value={shop}>
          <EmbedRoute />
        </ShopContext.Provider>
      </XLMContext.Provider>
    </ChakraProvider>
  );
}

export default App;
