class ConversationsController < ApplicationController
    before_action :authenticate_user!

    def index
        @users = User.all
        @conversations = Conversation.all.order("created_at DESC")
    end

    def create
        if Conversation.between(params[:sender_id], params[recipient_ids:[]]).present?
            @conversation = Conversation.between(params[:sender_id], params[recipient_ids:[]]).first
        else
            @conversation = Conversation.create!(conversation_params)
        end
        redirect_to conversation_messages_path(@conversation)
    end

    private

    def conversation_params
        params.permit(:sender_id, recipient_ids:[])
    end
  end
