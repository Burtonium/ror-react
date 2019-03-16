class Word < ApplicationRecord
  def self.random
    sql = "SELECT * FROM words OFFSET floor(random()*(SELECT COUNT(*) from words)) LIMIT 1"
    self.find_by_sql(sql)
  end
end
