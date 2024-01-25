class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validates :name, presence: true
  validates :password, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true

  has_many :items
  has_many :reservations
end
