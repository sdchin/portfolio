export class Post {
  constructor(title, date, summary) {
    this.title = title;
    this.date = date;
    this.summary = summary;
    this.id = this.generateId();
  }

  generateId() {
    const maxLength = 100000;
    let id = 0;
    for (let char of this.title + this.date + this.summary) {
      id += char.charCodeAt(0);
    }

    return id % maxLength;
  }

  updateId() {
    const maxLength = 100000;
    this.id = (this.id + 1) % maxLength;
  }
}
