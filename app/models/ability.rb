class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.admin?
      can :manage, :all
    else
      can :read, Item
      cannot :create, Item
      cannot :destroy, Item
    end
  end
end
