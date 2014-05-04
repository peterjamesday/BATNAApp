class StaticPagesController < ApplicationController
  before_action :authenticate_user!
  # before_filter :require_user

  def index
  	@current_user = current_user
  	
  	@logged_in = true
  end

  

  
end
