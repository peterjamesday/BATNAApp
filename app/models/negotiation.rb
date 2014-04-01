class Negotiation < ActiveRecord::Base
	belongs_to :user
	has_many :issues

    attr_accessible :negotiation_name, :batna_name, :batna_points, :final_score, :completed, :user_id
end
