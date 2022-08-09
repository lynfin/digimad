class CreateVisittests < ActiveRecord::Migration[7.0]
  def change
    create_table :visittests do |t|
      t.integer :visit_id
      t.integer :speedtest_id
      t.timestamps
    end
  end
end
