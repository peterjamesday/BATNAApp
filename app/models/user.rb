class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessor :password
  attr_protected :encrypted_password

  has_many :negotiations
  has_many :issues

 
  validates :email, :presence => true, :uniqueness => true, :email => true
  validates :password, :presence => true, :confirmation => true
 ##


  def self.authenticate(email, pass)
    user = where(:email => email).first
    user && BCrypt::Password.new(user.encrypted_password) == pass ? user : nil
  end

  def password=(pass)
    return if pass.blank?
    @password = pass
    self.encrypted_password = BCrypt::Password.create(pass)
  end


end