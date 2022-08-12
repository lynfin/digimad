# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_09_185842) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "label"
    t.string "street1"
    t.string "street2"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "region"
    t.string "zipcode"
    t.decimal "latitude"
    t.decimal "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "destinations", force: :cascade do |t|
    t.string "category"
    t.string "name"
    t.string "desc"
    t.string "phone"
    t.string "image"
    t.string "website"
    t.bigint "address_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_destinations_on_address_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "destination_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["destination_id"], name: "index_favorites_on_destination_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "speedtests", force: :cascade do |t|
    t.decimal "latency"
    t.decimal "download"
    t.decimal "upload"
    t.string "connectiontype"
    t.string "connectionprovider"
    t.string "testprovider"
    t.string "resulturl"
    t.string "resultimage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "username"
    t.string "email"
    t.string "bio"
    t.boolean "admin"
    t.bigint "address_id"
    t.string "password_digest"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address_id"], name: "index_users_on_address_id"
  end

  create_table "visits", force: :cascade do |t|
    t.datetime "start"
    t.datetime "end"
    t.bigint "user_id"
    t.bigint "destination_id"
    t.bigint "speedtest_id"
    t.string "desc"
    t.integer "tech_rating"
    t.string "tech_comment"
    t.integer "visit_rating"
    t.string "visit_comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["destination_id"], name: "index_visits_on_destination_id"
    t.index ["speedtest_id"], name: "index_visits_on_speedtest_id"
    t.index ["user_id"], name: "index_visits_on_user_id"
  end

end
