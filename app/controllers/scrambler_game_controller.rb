# frozen_string_literal: true

class ScramblerGameController < ApplicationController
  layout "scrambler_game"

  def index
    word = Word.random()
    @scrambler_game_props = { word: word.first.word }
  end
end
