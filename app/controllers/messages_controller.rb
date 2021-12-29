class MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action do
        @conversation = Conversation.find(params[:conversation_id])
    end

    def index
        @messages = @conversation.messages.all.order("created_at ASC")
        @message = @conversation.messages.new
    end

    def new
        @message = @conversation.messages.new
    end

    def create
        @message = @conversation.messages.new(message_params)
        if @message.save
            redirect_to conversation_messages_path(@conversation)
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :user_id, :conversation_id)
    end
end
