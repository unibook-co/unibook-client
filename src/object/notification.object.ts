export class NotificationObject {
  id: number;
  title: string;
  type: string;
  content: string;
  url: string;
  data: any;
  createdAt: string;

  constructor(data: {
    id: number;
    title: string;
    type: string;
    content: string;
    url: string;
    data: any;
    createdAt: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.content = data.content;
    this.url = data.url;
    this.data = data.data;
    this.createdAt = data.createdAt;
  }
}
