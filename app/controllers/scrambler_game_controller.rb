# frozen_string_literal: true

class ScramblerGameController < ApplicationController
  layout "scrambler_game"

  def index
    @scrambler_game_props = { name: "Stranger" }
  end
end
