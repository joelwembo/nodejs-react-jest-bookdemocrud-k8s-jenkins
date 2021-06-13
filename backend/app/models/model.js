module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      firstname : String, 
      lastname: String,
      title: String,
      description: String,
      published: Boolean,
     

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Book = mongoose.model("book", schema);
  return Book;
};
