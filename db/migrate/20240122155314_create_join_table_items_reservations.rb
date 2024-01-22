class CreateJoinTableItemsReservations < ActiveRecord::Migration[7.1]
  def change
    create_join_table :items, :reservations do |t|
      # t.index [:item_id, :reservation_id]
      # t.index [:reservation_id, :item_id]
    end
  end
end
