class Item < ApplicationRecord
  has_one :reservation, dependent: :destroy
  has_one :user, through: :reservation
  validates :name, :description, :image, presence: true
  validates :finance_fee, :purchase_fee, :total_amount, :duration, :apr, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
