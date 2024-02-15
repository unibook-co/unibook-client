import { BlockCommentReactionObject } from "./blockCommentReaction.object";
import { ChildBlockCommentObject } from "./childBlockComment.object";
import { UserObject } from "./user.object";

export class ParentBlockCommentObject {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    isEdited: boolean;
    type: "comment" | "question";
    reactions: BlockCommentReactionObject[];
    user: UserObject;
    children: ChildBlockCommentObject[];
    createdAt: string;
    updatedAt: string;

    constructor(data: {
        id: number;
        bookId: number;
        sectionId: number;
        blockId: string;
        content: string;
        isEdited: boolean;
        type: "comment" | "question";
        children: ChildBlockCommentObject[];
        reactions: BlockCommentReactionObject[];
        user: UserObject;
        createdAt: string;
        updatedAt: string;
    }) {
        this.id = data.id;
        this.bookId = data.bookId;
        this.sectionId = data.sectionId;
        this.blockId = data.blockId;
        this.content = data.content;
        this.isEdited = data.isEdited;
        this.type = data.type;
        this.children = data.children;
        this.reactions = data.reactions;
        this.user = data.user;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
