using System.Net;
using System.Net.Mail;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using Microsoft.Extensions.Options;
using Domain;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IOptions<SmtpSettings> _smtpSettings;
        private readonly string _email;
        private readonly string _password;

        public ContactController(IOptions<SmtpSettings> smtpSettings)
        {
            _email = smtpSettings.Value.Email;
            _password = smtpSettings.Value.Password;
        }

        [HttpGet]
        public IEnumerable<Domain> Get()
        {
            return new List<Domain>
            {
                new Domain {
                    Age = 22,
                    Name = "Stephen"
                },
                new Domain {
                    Age = 25,
                    Name = "Maggie"
                }
            };
        }

        [HttpPost]
        public void Post(Contact contact)
        {

            using (SmtpClient client = new SmtpClient("smtp.gmail.com", 587))
            {
                MailAddress to = new MailAddress(contact.Email);
                MailAddress from = new MailAddress(_email);

                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(_email, _password);
                client.EnableSsl = true;
                client.DeliveryMethod = SmtpDeliveryMethod.Network;

                using (MailMessage message = new MailMessage(from, to))
                {
                    message.Subject = $"Good evening {contact.Name}...";
                    message.Body = contact.Message;

                    try
                    {
                        client.Send(message);
                    }
                    catch (SmtpException smtp)
                    {
                        Console.WriteLine(smtp);
                    }
                }

            }


        }
    }
}
