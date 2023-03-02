let idCounter = 0;

export class Post {
  constructor(title, date, summary) {
    this.title = title;
    this.date = date;
    this.summary = summary;
    this.id = this.generateId();
  }

  generateId() {
    return idCounter++;
  }
}
