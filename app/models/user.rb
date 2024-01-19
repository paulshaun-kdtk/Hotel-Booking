class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  validates :name, presence: true
  validates :password, length: { minimum: 8 }
  validates :email, presence: true, uniqueness: true

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self
end
