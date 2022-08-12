class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  before_action :find_user, only: %i[show update destroy]

  def index
    render json: User.order(:username), status: :ok
  end

  def show
    render json: @user, status: :created
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :username, :email, :bio, :admin, :address, :password, :password_confirmation,
                  :image)
  end

  def find_user
    @user = User.find(params[:id])
  end
end
