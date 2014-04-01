class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :issue_name
      t.string :issue_outcome
      t.integer :potential_points
      t.integer :issue_points

      t.timestamps
    end
  end
end
