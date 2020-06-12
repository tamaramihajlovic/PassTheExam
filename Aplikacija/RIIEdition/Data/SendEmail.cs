using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace RIIEdition.Data
{
    public static class SendEmail
    {
        public static async Task sendEmail(string email,string body,string subject)
        {
            using(var smtp=new SmtpClient())
            {
                var credential=new NetworkCredential()
                {
                    UserName="halkatran@gmail.com",
                    Password="kaladontar" //ovde ide sifra umesto *
                };
                smtp.UseDefaultCredentials=false;
                smtp.Credentials=credential;
                smtp.Host="smtp.gmail.com";
                smtp.Port=587;
                smtp.EnableSsl=true;
                var message=new MailMessage();
                message.To.Add(email);
                message.Subject=subject;
                message.Body=body;
                message.IsBodyHtml=true;
                message.From=new MailAddress("halkatran@gmail.com");
                await smtp.SendMailAsync(message);

            }
        }
    }
}