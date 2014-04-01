class AddUserIdToNegotiations < ActiveRecord::Migration
  def change
    add_column :negotiations, :user_id, :integer
  end
end
