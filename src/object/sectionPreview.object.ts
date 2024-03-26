export class SectionPreviewObject {
  id: number;
  title: string;
  bookId: number;
  notionPageId: string;
  parent?: SectionPreviewObject;
  children?: SectionPreviewObject[];
  order: number;
  cachedAt: string;
  isPreviewAble: boolean;

  constructor(data: {
    id: number;
    title: string;
    bookId: number;
    notionPageId: string;
    parent?: SectionPreviewObject;
    children?: SectionPreviewObject[];
    order: number;
    cachedAt: string;
    isPreviewAble: boolean;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.bookId = data.bookId;
    this.notionPageId = data.notionPageId;
    this.parent = data.parent;
    this.children = data.children;
    this.order = data.order;
    this.cachedAt = data.cachedAt;
    this.isPreviewAble = data.isPreviewAble;
  }
}
