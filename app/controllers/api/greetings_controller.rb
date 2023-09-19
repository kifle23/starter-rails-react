class Api::GreetingsController < ApplicationController
  def random
    render json: Message.order('RANDOM()').first
  end
end
