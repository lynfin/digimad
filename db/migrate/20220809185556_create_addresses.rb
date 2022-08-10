class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :label
      t.string :street1
      t.string :street2
      t.string :city
      t.string :state
      t.string :country
      t.string :region
      t.string :zipcode
      t.numeric :lat
      t.numeric :long
      t.timestamps
    end
  end
end
