using System.Collections.Generic;
using API;
using API.Classes;
using API.Controllers;
using API.Interfaces;
using Domain;
using Microsoft.Extensions.Options;
using Moq;
using NUnit.Framework;

namespace stv_portfolio
{
    public class ContactControllerTests
    {
        private Mock<IOptions<SmtpSettings>> _smtpSettings;
        private Mock<IEmail> _email;
        private ContactController _controller;

        [SetUp]
        public void Setup()
        {
            _email = new Mock<IEmail>();
            _smtpSettings = new Mock<IOptions<SmtpSettings>>();
        }

        public static IEnumerable<Contact> Contacts
        {
            get
            {
                yield return new Contact()
                {
                    Name = "Stephen",
                    Email = "corralstephenmelben@gmail.com",
                    Message = "Heya watsup mate??? how you doing man? hope you do well!"
                };
            }
        }
        
        [Test]
        [TestCaseSource("Contacts")]
        public void Post_WhenCalled_VerifyComposeMessage(Contact contact)
        {
            _controller = new ContactController(_smtpSettings.Object, _email.Object);
            _controller.Post(contact);

            _email.Verify(e => e.ComposeMessage(contact));
        }

        [Test]
        public void MethodUnderTest_Scenario_Result()
        {
            Assert.Fail();
        }
    }
}