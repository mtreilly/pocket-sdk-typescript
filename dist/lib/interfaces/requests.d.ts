export interface PocketAddItemOptions {
    url: string;
    title?: string;
    tags?: string;
    tweet_id?: string;
}
export interface PocketGetOptions {
    state?: "unread" | "archive" | "all";
    favorite?: 0 | 1;
    tag?: string;
    contentType?: "article" | "video" | "image";
    sort?: "newest" | "oldest" | "title" | "site";
    detailType?: "simple" | "complete";
    search?: string;
    domain?: string;
    since?: number;
    count?: number;
    offset?: number;
}
/**
 * Add a new item to the user's list
 */
interface PocketAddAction {
    action: "add";
    item_id?: number;
    url?: string;
    title?: string;
    tags?: string;
    time?: number;
    ref_id?: number;
}
/**
 * Move an item to the user's archive
 */
interface PocketArchiveAction {
    action: "archive";
    item_id: number;
    time?: number;
}
/**
 * Move an item from the user's archive back into their unread list
 */
interface PocketReaddAction {
    action: "readd";
    item_id: number;
    time?: number;
}
/**
 * Mark an item as a favorite
 */
interface PocketFavoriteAction {
    action: "favorite";
    item_id: number;
    time?: number;
}
/**
 * Remove an item from the user's favorites
 */
interface PocketUnfavoriteAction {
    action: "unfavorite";
    item_id: number;
    time?: number;
}
/**
 * Permanently remove an item from the user's account
 */
interface PocketDeleteAction {
    action: "delete";
    item_id: number;
    time?: number;
}
/**
 * Add one or more tags to an item
 */
interface PocketTagsAddAction {
    action: "tags_add";
    item_id: number;
    tags: string;
    time?: number;
}
/**
 * Remove one or more tags from an item
 */
interface PocketTagsRemoveAction {
    action: "tags_remove";
    item_id: number;
    tags: string;
    time?: number;
}
/**
 * Replace all of the tags for an item with the one or more provided tags
 */
interface PocketTagsReplaceAction {
    action: "tags_replace";
    item_id: number;
    tags: string;
    time?: number;
}
/**
 * Remove all tags from an item
 */
interface PocketTagsClearAction {
    action: "tags_clear";
    item_id: number;
    time?: number;
}
/**
 * Rename a tag. This affects all items with this tag.
 */
interface PocketTagRenameAction {
    action: "tag_rename";
    old_tag: string;
    new_tag: string;
    time?: number;
}
/**
 * Delete a tag. This affects all items with this tag.
 */
interface PocketTagDeleteAction {
    action: "tag_delete";
    tag: string;
    time?: number;
}
export type PocketAction = PocketAddAction | PocketArchiveAction | PocketReaddAction | PocketFavoriteAction | PocketUnfavoriteAction | PocketDeleteAction | PocketTagsAddAction | PocketTagsRemoveAction | PocketTagsReplaceAction | PocketTagsClearAction | PocketTagRenameAction | PocketTagDeleteAction;
export {};
