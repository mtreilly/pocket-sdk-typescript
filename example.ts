import { PocketAction, PocketAddItemOptions } from "./interfaces/requests";
import { PocketSDK } from "./sdk";
import getRequestToken from "./auth/getRequestToken";

const consumerKey = "your_consumer_key";
const accessToken = "user_access_token";
const redirectUri = "https://webhook.site/2ad5f9f6-e29b-4c38-a27c-5e372bdc03b4";

const result = getRequestToken(consumerKey, redirectUri);

const pocketSDK = new PocketSDK(consumerKey);

const addItemOptions: PocketAddItemOptions = {
  url: "https://example.com/article",
  title: "Example Article",
  tags: "example,article",
};

pocketSDK
  .addItem(accessToken, addItemOptions)
  .then((response) => {
    console.log("Item added:", response.item_id);
  })
  .catch((error) => {
    console.error("Error adding item:", error.message);
  });

const actions: PocketAction[] = [
  {
    action: "archive",
    item_id: 229279689,
    time: 1348853312,
  },
];

pocketSDK.sendActions(accessToken, actions).then((response) => {
  console.log(response);
});
