export interface PocketAddItemOptions {
  url: string;
  title?: string;
  tags?: string;
  tweet_id?: string;
}

export interface PocketGetOptions {
  // State of the items to return: unread, archive, or all
  state?: "unread" | "archive" | "all";

  // Favorite status of the items to return: 0 for un-favorited, 1 for favorited
  favorite?: 0 | 1;

  // Tag to filter the items: tag_name for a specific tag, _untagged_ for untagged items
  tag?: string;

  // Content type of the items to return: article, video, or image
  contentType?: "article" | "video" | "image";

  // Sorting order of the items to return: newest, oldest, title, or site
  sort?: "newest" | "oldest" | "title" | "site";

  // Detail level of the items to return: simple or complete
  detailType?: "simple" | "complete";

  // Search string to filter items by title or url
  search?: string;

  // Domain to filter items from a specific domain
  domain?: string;

  // Timestamp to return items modified since the given time
  since?: number;

  // Number of items to return
  count?: number;

  // Offset position of the results to start returning items from
  offset?: number;
}

// Basic Actions

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

// Tagging Actions

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

// Combine all actions into a single type
export type PocketAction =
  | PocketAddAction
  | PocketArchiveAction
  | PocketReaddAction
  | PocketFavoriteAction
  | PocketUnfavoriteAction
  | PocketDeleteAction
  | PocketTagsAddAction
  | PocketTagsRemoveAction
  | PocketTagsReplaceAction
  | PocketTagsClearAction
  | PocketTagRenameAction
  | PocketTagDeleteAction;
