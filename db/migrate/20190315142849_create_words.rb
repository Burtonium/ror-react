class CreateWords < ActiveRecord::Migration[5.2]
  def change
    create_table :words do |t|
      t.string :word
      t.integer :difficulty

      t.timestamps
    end

    add_numericality_constraint :words, :difficulty, 
      greater_than_or_equal_to:1, 
      less_than_or_equal_to:10
  end
end
