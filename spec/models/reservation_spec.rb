require 'rails_helper'

RSpec.describe Reservation, type: :model do
  let(:user1) { User.create(name: 'Assem', email: 'assem@example.com', password: 'password123') }
  let(:item1) do
    Item.create(
      name: 'Example Item',
      description: 'This is a sample item.',
      image: 'example.jpg',
      finance_fee: 100.00,
      purchase_fee: 200.00,
      total_amount: 500.00,
      duration: 12,
      apr: 5.0
    )
  end
  let(:reservation) { Reservation.create(user: user1, item_id: item1.id, date: Date.today, city: 'Big City') }

  describe 'validations' do
    it 'is not valid without a date' do
      reservation.date = nil
      expect(reservation).not_to be_valid
    end

    it 'is not valid without an city' do
      reservation.city = nil
      expect(reservation).not_to be_valid
    end
  end
end
