# == Schema Information
#
# Table name: interviews
#
#  id             :bigint           not null, primary key
#  date           :date
#  time           :time
#  interview_type :string
#  application_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
require 'test_helper'

class InterviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
