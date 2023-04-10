import { PocketAction, PocketAddItemOptions } from "./request-interfaces";
import { PocketSDK } from "./sdk";

const consumerKey = "your_consumer_key";
const accessToken = "user_access_token";

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
