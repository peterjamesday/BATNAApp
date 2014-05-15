class NegotiationsController < ApplicationController
	respond_to :html, :json

	def new_negotiation
    
	  @negotiation = Negotiation.new(params[:negotiation])
    
	  @negotiation.user_id = current_user.id

	  if @negotiation.save
	    respond_to do |format|
	      format.json { render :json => @negotiation }
	    end
	  end
  end

  def update_negotiation
    id_number = params[:negotiation]["id"]
    
    @negotiation = Negotiation.find_by(id: id_number)
    @negotiation.negotiation_name = params[:negotiation]["negotiation_name"]
    @negotiation.batna_name = params[:negotiation]["batna_name"]
    @negotiation.batna_points = params[:negotiation]["batna_points"]
  
    if @negotiation.save
      respond_to do |format|
        format.json { render :json => @negotiation }
      end
    end
  end

  def retrieve_negotiations
    @id = current_user.id
    @negotiation = Negotiation.where(user_id: @id).last(5)

  	if @negotiation
  		respond_with do |format|
  			format.json { render :json => @negotiation }
  		end
  	end
  end

  def destroy
    Negotiation.destroy(params[:negotiation]["id"])
  end
end
