class AddUserToHotels < ActiveRecord::Migration[7.1]
  def change
    add_reference :hotels, :user, null: false, foreign_key: true
  end
end
