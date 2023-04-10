export interface PocketAddItemResponse {
  item_id: string; // A unique identifier for the added item
  normal_url: string; // The original url for the added item
  resolved_id: string; // A unique identifier for the resolved item
  resolved_url: string; // The resolved url for the added item
  domain_id: string; // A unique identifier for the domain of the resolved_url
  origin_domain_id: string; // A unique identifier for the domain of the normal_url
  response_code: string; // The response code received by the Pocket parser when it tried to access the item
  mime_type: string; // The MIME type returned by the item
  content_length: string; // The content length of the item
  encoding: string; // The encoding of the item
  date_resolved: string; // The date the item was resolved
  date_published: string; // The date the item was published (if the parser was able to find one)
  title: string; // The title of the resolved_url
  excerpt: string; // The excerpt of the resolved_url
  word_count: string; // For an article, the number of words
  has_image: "0" | "1" | "2"; // 0: no image; 1: has an image in the body of the article; 2: is an image
  has_video: "0" | "1" | "2"; // 0: no video; 1: has a video in the body of the article; 2: is a video
  is_index: "0" | "1"; // 0 or 1; If the parser thinks this item is an index page it will be set to 1
  is_article: "0" | "1"; // 0 or 1; If the parser thinks this item is an article it will be set to 1
  authors?: { [authorId: string]: PocketAuthor }; // Array of author data (if author(s) were found)
  images?: { [imageId: string]: PocketImage }; // Array of image data (if image(s) were found)
  videos?: { [videoId: string]: PocketVideo }; // Array of video data (if video(s) were found)
}

export interface PocketAuthor {
  item_id: string; // The item id associated with the author
  author_id: string; // A unique identifier for the author
  name: string; // The author's name
  url: string; // The author's URL
}

export interface PocketImage {
  item_id: string; // The item id associated with the image
  image_id: string; // A unique identifier for the image
  src: string; // The image source URL
  width: string; // The image width
  height: string; // The image height
  credit: string; // The image credit
  caption: string; // The image caption
}

export interface PocketVideo {
  item_id: string; // The item id associated with the video
  video_id: string; // A unique identifier for the video
  src: string; // The video source URL
  width: string; // The video width
  height: string; // The video height
  type: string; // The video type
  vid: string; // The video id in the video provider's system
  length: string; // The video length
}

export interface PocketItem {
  item_id: string; // Unique identifier for the saved item
  resolved_id: string; // Unique identifier for the actual URL of the saved item
  given_url: string; // URL that was saved with the item
  resolved_url: string; // Final URL of the item
  given_title: string; // Title saved along with the item
  resolved_title: string; // Title found by Pocket when the item was parsed
  favorite: 0 | 1; // 1 if the item is favorited, 0 otherwise
  status: 0 | 1 | 2; // 1 if the item is archived, 2 if it should be deleted, 0 otherwise
  excerpt: string; // First few lines of the item (articles only)
  is_article: 0 | 1; // 1 if the item is an article, 0 otherwise
  has_image: 0 | 1 | 2; // 1 if the item has images, 2 if the item is an image, 0 otherwise
  has_video: 0 | 1 | 2; // 1 if the item has videos, 2 if the item is a video, 0 otherwise
  word_count: number; // Number of words in the article
  tags?: Record<string, any>; // JSON object of user tags associated with the item
  authors?: Record<string, PocketAuthor>; // JSON object listing all authors associated with the item
  images?: Record<string, PocketImage>; // JSON object listing all images associated with the item
  videos?: Record<string, PocketVideo>; // JSON object listing all videos associated with the item
}
