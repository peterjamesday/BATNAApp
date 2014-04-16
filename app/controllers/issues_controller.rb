class IssuesController < ApplicationController
	respond_to :html, :json

	def new_issue
	  @issue = Issue.new(params[:issue])
	  @issue.user_id = session[:user_id]

	  if @issue.save
	    respond_to do |format|
	      format.json { render :json => @issue }
	    end
	  end
  end

  def update_issue
  	id_number = params[:issue]["id"]
    
    @issue = Issue.find_by(id: id_number)
    @issue.issue_name = params[:issue]["issue_name"]
    @issue.issue_outcome = params[:issue]["issue_outcome"]
    @issue.potential_points = params[:issue]["potential_points"]
    @issue.issue_points = params[:issue]["issue_points"]
   
    if @issue.save
      respond_to do |format|
        format.json { render :json => @issue }
      end
    end
  end

  def retrieve_issues
    @id = params[:negotiation_id]
    @issue = Issue.where(negotiation_id: @id).load

  	if @issue
  		respond_with do |format|
  			format.json { render :json => @issue }
  		end
  	end
  end
end
