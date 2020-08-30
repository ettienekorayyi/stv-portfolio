using System;
using System.Net;
using System.Net.Mail;
using API.Interfaces;
using Domain;
using Microsoft.Extensions.Options;

namespace API.Classes
{
    public class Email : IEmail
    {
        private readonly IOptions<SmtpSettings> _smtpSettings;
        private readonly SmtpClient _client;

        public Email(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings;
            _client = new SmtpClient("smtp.gmail.com", 587);
        }

        public SmtpClient ConfigureSmtpSettings()
        {
            _client.UseDefaultCredentials = false;
            _client.Credentials = new NetworkCredential
            {
                UserName = _smtpSettings.Value.Email,
                Password = _smtpSettings.Value.Password
            };
            _client.EnableSsl = true;
            _client.DeliveryMethod = SmtpDeliveryMethod.Network;

            return _client;
        }
        public void ComposeMessage(Contact contact)
        {
            MailAddress to = new MailAddress(contact.Email);
            MailAddress from = new MailAddress(_smtpSettings.Value.Email);
            SmtpClient client = this.ConfigureSmtpSettings();

            using (MailMessage message = new MailMessage(to, from))
            {
                message.Subject = $"Expression of interest to collaborate with {contact.Name} : Email {message.From.Address}";
                message.Body = $"{contact.Message}";

                try
                {
                    client.Send(message);
                }
                catch (SmtpException smtp)
                {
                    Console.WriteLine(smtp);
                }
                finally
                {
                    client.Dispose();
                }
            }
        }
    }
}