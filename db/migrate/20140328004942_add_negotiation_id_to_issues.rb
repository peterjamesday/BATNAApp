class AddNegotiationIdToIssues < ActiveRecord::Migration
  def change
    add_column :issues, :negotiation_id, :integer
  end
end
