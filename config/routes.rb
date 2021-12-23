Rails.application.routes.draw do

  resources :conversations do
    resources :messages
  end

  get '/*path', to: 'welcome#index', constraints: ->(request){ request.format.html? }

  root to: 'welcome#index'

end
