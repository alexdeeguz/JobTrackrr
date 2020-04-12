@interviews.each do |interview|
    json.set! interview.id do
        json.extract! interview, :id, :date, :time, :interview_type, :application_id
    end
end