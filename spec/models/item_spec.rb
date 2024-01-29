require 'rails_helper'

RSpec.describe Item, type: :model do
  let(:valid_attributes) do
    {
      name: 'Example Item',
      description: 'This is a sample item.',
      image: 'example.jpg',
      finance_fee: 100.00,
      purchase_fee: 200.00,
      total_amount: 500.00,
      duration: 12,
      apr: 5.0
    }
  end

  it 'is valid with valid attributes' do
    item = Item.new(valid_attributes)
    expect(item).to be_valid
  end

  it 'is not valid without a name' do
    item = Item.new(valid_attributes.merge(name: nil))
    expect(item).not_to be_valid
  end

  it 'is not valid without a description' do
    item = Item.new(valid_attributes.merge(description: nil))
    expect(item).not_to be_valid
  end

  it 'is not valid without an image' do
    item = Item.new(valid_attributes.merge(image: nil))
    expect(item).not_to be_valid
  end

  it 'is not valid with negative finance_fee' do
    item = Item.new(valid_attributes.merge(finance_fee: -50.00))
    expect(item).not_to be_valid
  end
end
