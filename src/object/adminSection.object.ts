import { AdminSectionPreviewObject } from "./adminSectionPreview.object";

export class AdminSectionObject {
  id: number;
  title: string;
  bookId: number;
  notionPageId: string;
  recordMap?: any;
  parent?: AdminSectionPreviewObject;
  children?: AdminSectionPreviewObject[];
  order: number;
  cachedAt: string;
  cachedHtmlZipFileUrl?: string;
  isIntroduction: boolean;
  isPreviewAble: boolean;

  constructor(data: {
    id: number;
    title: string;
    bookId: number;
    notionPageId: string;
    recordMap?: any;
    parent?: AdminSectionPreviewObject;
    children?: AdminSectionPreviewObject[];
    order: number;
    isIntroduction: boolean;
    cachedAt: string;
    cachedHtmlZipFileUrl?: string;
    isPreviewAble: boolean;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.bookId = data.bookId;
    this.notionPageId = data.notionPageId;
    this.recordMap = data.recordMap;
    this.parent = data.parent;
    this.children = data.children;
    this.order = data.order;
    this.isIntroduction = data.isIntroduction;
    this.cachedAt = data.cachedAt;
    this.cachedHtmlZipFileUrl = data.cachedHtmlZipFileUrl;
    this.isPreviewAble = data.isPreviewAble;
  }
}
