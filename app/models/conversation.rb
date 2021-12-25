class Conversation < ApplicationRecord
    belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
    # belongs_to :recipients, foreign_key: :recipient_ids, class_name: 'User'

    has_many :messages, dependent: :destroy
    validates_uniqueness_of :sender_id, scope: :recipient_ids

    scope :between, -> (sender_id, recipient_ids) do
        where("(conversations.sender_id = ? AND conversations.recipient_ids = ?) OR (conversations.sender_id = ? AND conversations.recipient_ids =?)", sender_id, recipient_ids, recipient_ids, sender_id)
    end
end
