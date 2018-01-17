class TweetsController < ApplicationController
	before_action :authenticate_user!

	def index
		render json:Tweet.includes(:user).all.order(created_at: :desc)
	end

	def create
		tweet = Tweet.create(body: params[:body], user_id: current_user.id)
		render json: tweet
	end

end
