import { UserObject } from "./user.object";

export class BlockMemoObject {
  id: number;
  bookId: number;
  sectionId: number;
  blockId: string;
  content: string;
  user: UserObject;
  parent?: BlockMemoObject;
  children?: BlockMemoObject[];
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: number;
    bookId: number;
    sectionId: number;
    blockId: string;
    content: string;
    parent: BlockMemoObject;
    children: BlockMemoObject[];
    user: UserObject;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.bookId = data.bookId;
    this.sectionId = data.sectionId;
    this.blockId = data.blockId;
    this.content = data.content;
    this.parent = data.parent;
    this.children = data.children;
    this.user = data.user;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
