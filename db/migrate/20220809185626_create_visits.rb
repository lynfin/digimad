class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :start
      t.datetime :end
      t.integer :user_id
      t.integer :destination_id
      t.string :desc
      t.integer :tech_rating
      t.string :tech_comment
      t.integer :visit_rating
      t.string :visit_comment
      t.timestamps
    end
  end
end
