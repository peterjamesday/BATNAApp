class SessionsController < ApplicationController

  respond_to :html, :json

  def create
  
    
    @user = User.authenticate(params[:user][:email], params[:user][:password])

    if @user
      create_user_session(@user)
     
      sign_in(@user)
      redirect_to '/'
     
    else
      respond_to do |format|
        format.html { render 'new' }
        format.json { render :json => {:error => "Invalid email or password."} }
      end
    end
  end

  def destroy
    destroy_user_session
    redirect_to '/login', :notice => "Logged out."
  end





end