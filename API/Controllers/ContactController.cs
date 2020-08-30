using System.Net;
using System.Net.Mail;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using Microsoft.Extensions.Options;
using Domain;
using API.Classes;
using API.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IOptions<SmtpSettings> _smtpSettings;
        private IEmail _email;

        public ContactController(IOptions<SmtpSettings> smtpSettings, IEmail email = null)
        {
            _smtpSettings = smtpSettings;
            _email = email ?? new Email(smtpSettings);
        }

        [HttpPost]
        public void Post(Contact contact)
        {
            _email.ComposeMessage(contact);
        }
    }
}
