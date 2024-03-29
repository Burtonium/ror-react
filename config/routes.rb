Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  get 'scrambler_game', to: 'scrambler_game#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "scrambler_game#index"
end
