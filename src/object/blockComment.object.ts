import { BlockCommentReactionObject } from "./blockCommentReaction.object";
import { UserObject } from "./user.object";

export class BlockCommentObject {
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    isEdited: boolean;
    type: "comment" | "question";
    parent: BlockCommentObject;
    reactions: BlockCommentReactionObject[];
    user: UserObject;

    constructor(data: {
        bookId: number;
        sectionId: number;
        blockId: string;
        content: string;
        isEdited: boolean;
        type: "comment" | "question";
        parent: BlockCommentObject;
        reactions: BlockCommentReactionObject[];
        user: UserObject;
    }) {
        this.bookId = data.bookId;
        this.sectionId = data.sectionId;
        this.blockId = data.blockId;
        this.content = data.content;
        this.isEdited = data.isEdited;
        this.type = data.type;
        this.parent = data.parent;
        this.reactions = data.reactions;
        this.user = data.user;
    }
}
