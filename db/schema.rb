# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140410015637) do

  create_table "issues", force: true do |t|
    t.string   "issue_name"
    t.string   "issue_outcome"
    t.integer  "potential_points"
    t.integer  "issue_points"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "negotiation_id"
    t.integer  "user_id"
  end

  create_table "negotiations", force: true do |t|
    t.string   "negotiation_name"
    t.string   "batna_name"
    t.integer  "batna_points"
    t.integer  "final_score"
    t.boolean  "completed"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
    t.string   "phone"
    t.string   "company"
    t.string   "title"
    t.string   "facebook"
    t.string   "password_digest"
  end

end
