@job_applications.each do |application|
    json.set! application.id do
        json.extract! application, :id, :application_date, :company_name, :position, :job_posting_url, :company_site_url, :status
    end
end