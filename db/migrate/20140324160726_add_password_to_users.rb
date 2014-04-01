class AddPasswordToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string
    add_column :users, :phone, :string
    add_column :users, :company, :string
    add_column :users, :title, :string
    add_column :users, :facebook, :string
    add_column :users, :password_digest, :string
    
   
  end
end
