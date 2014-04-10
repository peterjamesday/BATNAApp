class Issue < ActiveRecord::Base
  belongs_to :negotiation
  belongs_to :user

  attr_accessible :issue_name, :issue_outcome, :potential_points, :issue_points, :negotiation_id

end
