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
    @id = session[:user_id]
    @negotiation = Negotiation.where(user_id: @id).last(5)

  	if @negotiation
  		respond_with do |format|
  			format.json { render :json => @negotiation }
  			
  		end
  	end
  end
end
