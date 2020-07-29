using System.Net;
using System.Net.Mail;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
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
        public void Send()
        {
            string email = "corralstephenmelben.it@gmail.com";
            string password = "";
            MailAddress to = new MailAddress("corralannmargarett@gmail.com");
            MailAddress from = new MailAddress("corralstephenmelben.it@gmail.com");
            MailMessage message = new MailMessage(from, to);

            message.Subject = "Good morning Stephen...";
            message.Body = "Lorem ipsum dolor wapar siptum gitp";

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
