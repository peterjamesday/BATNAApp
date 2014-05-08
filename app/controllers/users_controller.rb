class UsersController < ApplicationController
  before_action :authenticate_user!, :only => [:show, :new, :create]
  

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
      redirect_to :static_pages

    else
     redirect_to :back
       

    end

  end

  



end