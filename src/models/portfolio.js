export default class Portfolio {
  constructor({
    id,
    title,
    thumbnail,
    description,
    sourceCodeUrl,
    demoUrl,
    projectTags
  }) {
    this.id = id;
    this.title = title;
    this.thumbnail = thumbnail;
    this.description = description;
    this.sourceCodeUrl = sourceCodeUrl;
    this.demoUrl = demoUrl;
    this.projectTags = projectTags;
  }
}
