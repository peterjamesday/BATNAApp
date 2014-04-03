class UsersController < ApplicationController

  

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
       respond_to do |format|
              format.json { render :json => @user }
      end
      flash[:notice] = 'Account created.'

      create_user_session(@user)
      

    else
     
       respond_to do |format|
              format.json { render :json => {:error => "Invalid email or password."} }
       end

    end

  end

  



end