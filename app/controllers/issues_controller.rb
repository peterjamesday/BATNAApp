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
