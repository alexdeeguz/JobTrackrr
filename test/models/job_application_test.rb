# == Schema Information
#
# Table name: job_applications
#
#  id               :bigint           not null, primary key
#  application_date :date
#  company_name     :string
#  position         :string
#  job_posting_url  :string
#  company_site_url :string
#  status           :string
#  user_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class JobApplicationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
