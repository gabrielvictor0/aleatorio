namespace WebAPI.Utils.Mail
{
    public interface IEmailService
    {
        //MEtodo Assincrono para encio de email que recebe o EmailRequest
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
