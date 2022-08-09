class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :category
      t.string :name
      t.string :desc
      t.string :phone
      t.string :image
      t.string :website
      t.integer :address_id
      t.timestamps
    end
  end
end
