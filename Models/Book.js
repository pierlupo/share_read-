class Book {
    constructor(
      id,
      categoryIds,
      title,
      imageCoverUrl,
      author,
      releaseDate,
      category,
      summary,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageCoverUrl = imageCoverUrl;
      this.author = author;
      this.releaseDate = releaseDate;
      this.category = category;
      this.summary = summary;
    }
  }
  
  export default Book;