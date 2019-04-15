export default class Portfolio {
  constructor({
    id,
    title,
    thumbnails,
    description,
    sourceCodeUrl,
    demoUrl,
    projectTags
  }) {
    this.id = id;
    this.title = title;
    this.thumbnails = thumbnails;
    this.description = description;
    this.sourceCodeUrl = sourceCodeUrl;
    this.demoUrl = demoUrl;
    this.projectTags = projectTags;
  }
}
