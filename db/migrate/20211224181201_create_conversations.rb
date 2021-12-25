class CreateConversations < ActiveRecord::Migration[6.0]
  def change
    create_table :conversations do |t|
      t.integer :sender_id
      t.integer :recipient_ids, array: true, default: []

      t.timestamps
    end
  end
end
