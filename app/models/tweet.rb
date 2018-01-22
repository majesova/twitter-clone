class Tweet < ApplicationRecord
	belongs_to :user

	def as_json(options={})
		super(methods:[:name, :gravatar])
	end

	def name
		user.display_name
	end

	def gravatar
		hash = Digest::MD5.hexdigest(user.email)
		"https://www.gravatar.com/avatar/#{hash}"
	end

	def self.stream_for(current_user_id)
		joins(:user)
		.where(["users.id = :current_user_id OR users.id in (
				SELECT user_id FROM followers 
				WHERE followed_by = :current_user_id
				)",{current_user_id:current_user_id}])
		.order(created_at: :desc)
		.all
	end
end
