import { UserObject } from "./user.object";

export type BookOption = {
  isExportPDFEnabled: boolean;
};

export class BookObject {
  id: number;
  title: string;
  author: string;
  description: string;
  regularPrice: number;
  price: number;
  coverImage: string;
  status: "draft" | "pending" | "published" | "deleted";
  authorUsers: {
    id: number;
    role: string;
    user: UserObject;
  }[];
  publisher: string;
  publishedAt: string;
  ISBN?: string;
  options: BookOption;

  isExportPDFEnabled: boolean;

  constructor(data: {
    id: number;
    title: string;
    author: string;
    description: string;
    regularPrice: number;
    price: number;
    coverImage: string;
    status: "draft" | "pending" | "published" | "deleted";
    authorUsers: {
      id: number;
      role: string;
      user: UserObject;
    }[];
    publisher: string;
    publishedAt: string;
    ISBN?: string;
    options: BookOption;

    isExportPDFEnabled: boolean;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.description = data.description;
    this.regularPrice = data.regularPrice;
    this.price = data.price;
    this.coverImage = data.coverImage;
    this.status = data.status;
    this.authorUsers = data.authorUsers;
    this.publisher = data.publisher;
    this.publishedAt = data.publishedAt;
    this.ISBN = data.ISBN;
    this.options = data.options;

    this.isExportPDFEnabled = data.isExportPDFEnabled;
  }
}
