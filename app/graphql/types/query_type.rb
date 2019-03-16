module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :all_words, [WordType], null: false
    field :random_word, [WordType], null: false

    # this method is invoked, when `all_words` fields is beeing resolved
    def all_words
      Word.all
    end

    def random_word
      print 'hi'
      Word.random
    end
  end
end
