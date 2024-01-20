class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  validates :name, presence: true
  validates :password, length: { minimum: 8 }
  validates :email, presence: true, uniqueness: true

  has_many :hotels
  has_many :reservations

  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :confirmable, :trackable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
end
