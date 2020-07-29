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

        public ContactController(IOptions<SmtpSettings> smtpSettings)
        {
            _smtpSettings = smtpSettings;
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

        // https://stackoverflow.com/questions/18503333/the-smtp-server-requires-a-secure-connection-or-the-client-was-not-authenticated
        [HttpPost]
        public void Send()
        {
            string email = _smtpSettings.Value.Email;
            string password = _smtpSettings.Value.Password;
            System.Console.WriteLine(email);
            MailAddress to = new MailAddress("corralannmargarett@gmail.com");
            MailAddress from = new MailAddress("corralstephenmelben.it@gmail.com");
            MailMessage message = new MailMessage(from, to);

            message.Subject = "Good evening Maggie...";
            message.Body = "Wapak...fwaji";

            SmtpClient client = new SmtpClient("smtp.gmail.com",587)
            {
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(email, password),
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
            };

            try
            {
                client.Send(message);
            }
            catch(SmtpException smtp)
            {
                Console.WriteLine(smtp);
            }
        }
    }
}
