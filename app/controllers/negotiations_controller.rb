class NegotiationsController < ApplicationController

	respond_to :html, :json

	def new_negotiation
	  @negotiation = Negotiation.new(params[:negotiation])
	  @negotiation.user_id = session[:user_id]

	  if @negotiation.save
	    respond_to do |format|
	      format.json { render :json => @negotiation }
	    end
	  end
  end

  def retrieve_negotiations
    @negotiation = Negotiation.where(params[:user_id])

  	if @negotiation
  		respond_with do |format|
  			format.json {render :json => @negotiation }
  			
  		end
  	end
  end
end
