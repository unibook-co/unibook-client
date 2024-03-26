import { BookOption } from "./book.object";
import { UserObject } from "./user.object";

export class AdminBookObject {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  notionDatabaseId: string;
  status: "draft" | "pending" | "published" | "deleted";
  authorUsers: {
    id: number;
    role: string;
    user: UserObject;
  }[];
  isExportPDFEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  publisher: string;
  publishedAt: string;
  ISBN?: string;
  options: BookOption;

  constructor(data: {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    coverImage: string;
    notionDatabaseId: string;
    status: "draft" | "pending" | "published" | "deleted";
    isExportPDFEnabled: boolean;
    authorUsers: {
      id: number;
      role: string;
      user: UserObject;
    }[];
    createdAt: string;
    updatedAt: string;
    publisher: string;
    publishedAt: string;
    ISBN?: string;
    options: BookOption;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.description = data.description;
    this.price = data.price;
    this.coverImage = data.coverImage;
    this.notionDatabaseId = data.notionDatabaseId;
    this.isExportPDFEnabled = data.isExportPDFEnabled;
    this.status = data.status;
    this.authorUsers = data.authorUsers;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.publisher = data.publisher;
    this.publishedAt = data.publishedAt;
    this.ISBN = data.ISBN;
    this.options = data.options;
  }
}
