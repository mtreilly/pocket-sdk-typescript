// import getRequestToken from "../auth/getRequestToken.js";
// import createAuthUrl from "../auth/createAuthUrl.js";
// import * as dotenv from "dotenv";
// import getAccessToken from "../auth/getAccessToken.js";
// import PocketSDK from "../sdk.js";
// import open from "open";
// dotenv.config();

// const consumerKey = process.env.CONSUMER_KEY ?? "";
// const redirectUri = process.env.REDIRECT_URI ?? "";

// const result = await getRequestToken(consumerKey, redirectUri);

// console.log(result);

// const authUrl = createAuthUrl(result, redirectUri, "other");

// console.log(authUrl);

// console.log("Confirm in URL and then press any key to continue.");

// open(authUrl);

// process.stdin.once("data", async function () {
//   const access_token_json = await getAccessToken(consumerKey, result);
//   const access_token = access_token_json.access_token;

//   console.log(access_token);
//   const pocketSDK = new PocketSDK(consumerKey);

//   //   pocketSDK
//   //     .addItem(access_token, {
//   //       url: "https://example.com/article",
//   //       title: "Example Article",
//   //       tags: "example,article",
//   //     })
//   //     .then((response) => {
//   //       console.log("Item added:", response.item_id);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error adding item:", error.message);
//   //     });

//   pocketSDK
//     .getItems(access_token, {
//       detailType: "complete",
//       sort: "newest",
//       state: "unread",
//       tag: "reform",
//       count: 5,
//       offset: 0,
//     })
//     .then((response) => {
//       console.log(response);
//       console.log("Tags used:");
//       for (const key in response.list) {
//         console.log(response.list[key].tags);
//       }
//     })
//     .catch((error) => {
//       console.error("Error adding item:", error.message);
//     });
// });
