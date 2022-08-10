class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :start
      t.datetime :end
      t.belongs_to :user
      t.belongs_to :destination
      t.belongs_to :speedtest
      t.string :desc
      t.integer :tech_rating
      t.string :tech_comment
      t.integer :visit_rating
      t.string :visit_comment
      t.timestamps
    end
  end
end
