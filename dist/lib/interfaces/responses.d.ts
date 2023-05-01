export interface PocketAddItemResponse {
  item_id: string;
  normal_url: string;
  resolved_id: string;
  resolved_url: string;
  domain_id: string;
  origin_domain_id: string;
  response_code: string;
  mime_type: string;
  content_length: string;
  encoding: string;
  date_resolved: string;
  date_published: string;
  title: string;
  excerpt: string;
  word_count: string;
  has_image: "0" | "1" | "2";
  has_video: "0" | "1" | "2";
  is_index: "0" | "1";
  is_article: "0" | "1";
  authors?: {
    [authorId: string]: PocketAuthor;
  };
  images?: {
    [imageId: string]: PocketImage;
  };
  videos?: {
    [videoId: string]: PocketVideo;
  };
}
export interface PocketAuthor {
  item_id: string;
  author_id: string;
  name: string;
  url: string;
}
export interface PocketImage {
  item_id: string;
  image_id: string;
  src: string;
  width: string;
  height: string;
  credit: string;
  caption: string;
}
export interface PocketVideo {
  item_id: string;
  video_id: string;
  src: string;
  width: string;
  height: string;
  type: string;
  vid: string;
  length: string;
}
export interface PocketTag {
  item_id: number;
  tag: string;
}
export interface PocketItem {
  item_id: string;
  resolved_id: string;
  given_url: string;
  resolved_url: string;
  given_title: string;
  resolved_title: string;
  favorite: 0 | 1;
  status: 0 | 1 | 2;
  excerpt: string;
  is_article: 0 | 1;
  has_image: 0 | 1 | 2;
  has_video: 0 | 1 | 2;
  time_to_read: number;
  word_count: number;
  top_image_url: string;
  time_added: number;
  time_updated: number;
  time_read: number;
  time_favorited: number;
  listen_duration_estimate: number;
  sort_id: number;
  lang: string;
  tags?: Record<string, PocketTag>;
  authors?: Record<string, PocketAuthor>;
  images?: Record<string, PocketImage>;
  videos?: Record<string, PocketVideo>;
}
export interface PocketRetrieveResponse {
  list: {
    [itemId: string]: PocketItem;
  };
  complete: number;
  status: number;
}
export interface PocketActionResponse {
  action_results: string[];
  status: number;
}
