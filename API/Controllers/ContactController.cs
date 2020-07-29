using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
    }
}
