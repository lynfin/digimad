class CreateSpeedtests < ActiveRecord::Migration[7.0]
  def change
    create_table :speedtests do |t|
      t.numeric :latency
      t.numeric :download
      t.numeric :upload
      t.string :connectiontype
      t.string :testprovider
      t.string :resulturl
      t.string :resultimage
      t.timestamps
    end
  end
end
