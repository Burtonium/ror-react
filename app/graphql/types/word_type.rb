module Types
  class WordType < BaseObject
    field :id, ID, null: false
    field :word, String, null: false
    field :difficulty, Integer, null: false
  end
end