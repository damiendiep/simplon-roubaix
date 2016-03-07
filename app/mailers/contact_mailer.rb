class ContactMailer < ActionMailer::Base
    default to: "damien.diep@gmail.com"

    def contact_email(name, email, body)
        @name = name
        @email = email
        @body = body`enter code here`

        mail(from: email, subject: 'Contact Request')
    end

    
end