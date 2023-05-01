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
/**
 * Represents an item saved in Pocket.
 *
 * @interface PocketItem
 */
export interface PocketItem {
    /**
     * Unique identifier for the saved item.
     *
     * @type {string}
     */
    item_id: string;
    /**
     * Unique identifier for the actual URL of the saved item.
     *
     * @type {string}
     */
    resolved_id: string;
    /**
     * URL that was saved with the item.
     *
     * @type {string}
     */
    given_url: string;
    /**
     * Final URL of the item.
     *
     * @type {string}
     */
    resolved_url: string;
    /**
     * Title saved along with the item.
     *
     * @type {string}
     */
    given_title: string;
    /**
     * Title found by Pocket when the item was parsed.
     *
     * @type {string}
     */
    resolved_title: string;
    /**
     * Whether the item is favorited.
     *
     * @type {"0" | "1"}
     */
    favorite: "0" | "1";
    /**
     * Whether the item is archived, deleted, or neither.
     *
     * @type {"0" | "1" | "2"}
     */
    status: "0" | "1" | "2";
    /**
     * First few lines of the item (articles only).
     *
     * @type {string}
     */
    excerpt: string;
    /**
     * Whether the item is an article or not.
     *
     * @type {"0" | "1"}
     */
    is_article: "0" | "1";
    /**
     * Whether the item has images, is an image, or has neither.
     *
     * @type {"0" | "1" | "2"}
     */
    has_image: "0" | "1" | "2";
    /**
     * Whether the item has videos, is a video, or has neither.
     *
     * @type {"0" | "1" | "2"}
     */
    has_video: "0" | "1" | "2";
    /**
     * Number of words in the article.
     *
     * @type {string}
     */
    word_count: string;
    /**
     * JSON object of user tags associated with the item.
     *
     * @type {Record<string, PocketTag> | undefined}
     */
    tags?: Record<string, PocketTag>;
    /**
     * JSON object listing all authors associated with the item.
     *
     * @type {Record<string, PocketAuthor> | undefined}
     */
    authors?: Record<string, PocketAuthor>;
    /**
     * JSON object listing all images associated with the item.
     *
     * @type {Record<string, PocketImage> | undefined}
     */
    images?: Record<string, PocketImage>;
    /**
     * JSON object listing all videos associated with the item.
     *
     * @type {Record<string, PocketVideo> | undefined}
     */
    videos?: Record<string, PocketVideo>;
    is_index: "0" | "1";
    time_to_read: number;
    top_image_url: string;
    time_added: string;
    time_updated: string;
    time_read: string;
    time_favorited: string;
    listen_duration_estimate: number;
    sort_id: number;
    lang: string;
    domain_metadata?: {
        name: string;
        logo: string;
        greyscale_logo: string;
    };
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
