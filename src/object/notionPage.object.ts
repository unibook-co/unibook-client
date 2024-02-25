export class NotionPageObject {
  id: number;
  path?: string;
  title: string;
  notionPageId: string;
  recordMap?: string;
  cachedAt: string;

  constructor(data: any) {
    this.id = data.id;
    this.path = data.path;
    this.title = data.title;
    this.notionPageId = data.notionPageId;
    this.recordMap = data.recordMap;
    this.cachedAt = data.cachedAt;
  }
}
