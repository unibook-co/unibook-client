import { BlockCommentReactionObject } from "./blockCommentReaction.object";
import { ParentBlockCommentObject } from "./parentBlockComment.object";
import { UserObject } from "./user.object";

export class ChildBlockCommentObject {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    isEdited: boolean;
    type: "comment" | "question";
    parent: ParentBlockCommentObject;
    reactions: BlockCommentReactionObject[];
    user: UserObject;
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
        parent: ParentBlockCommentObject;
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
        this.parent = data.parent;
        this.reactions = data.reactions;
        this.user = data.user;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
