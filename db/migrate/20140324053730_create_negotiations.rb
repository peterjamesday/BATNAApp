class CreateNegotiations < ActiveRecord::Migration
  def change
    create_table :negotiations do |t|
      t.string :negotiation_name
      t.string :batna_name
      t.integer :batna_points
      t.integer :final_score
      t.boolean :completed

      t.timestamps
    end
  end
end
