class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :email
      t.string :bio
      t.boolean :admin
      t.belongs_to :address
      t.string :password_digest
      t.string :image

      t.timestamps
    end
  end
end
