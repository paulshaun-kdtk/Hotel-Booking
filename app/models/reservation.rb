class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :item
  validates_uniqueness_of :item_id

  validates :date, :city, presence: true
end
