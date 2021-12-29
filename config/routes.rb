Rails.application.routes.draw do

  devise_for :users

  resources :conversations do
    resources :messages
  end

  get '/*path', to: 'welcome#index', constraints: ->(request){ request.format.html? }

  root to: 'welcome#index'

end
