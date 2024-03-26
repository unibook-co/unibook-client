export class AdminSectionPreviewObject {
  id: number;
  title: string;
  bookId: number;
  notionPageId: string;
  parent?: AdminSectionPreviewObject;
  children?: AdminSectionPreviewObject[];
  order: number;
  isIntroduction: boolean;
  isPreviewAble: boolean;
  cachedAt: string;
  cachedHtmlZipFileUrl?: string;

  constructor(data: {
    id: number;
    title: string;
    bookId: number;
    notionPageId: string;
    parent?: AdminSectionPreviewObject;
    children?: AdminSectionPreviewObject[];
    order: number;
    isIntroduction: boolean;
    isPreviewAble: boolean;
    cachedAt: string;
    cachedHtmlZipFileUrl?: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.bookId = data.bookId;
    this.notionPageId = data.notionPageId;
    this.parent = data.parent;
    this.children = data.children;
    this.order = data.order;
    this.isIntroduction = data.isIntroduction;
    this.isPreviewAble = data.isPreviewAble;
    this.cachedAt = data.cachedAt;
    this.cachedHtmlZipFileUrl = data.cachedHtmlZipFileUrl;
  }
}
