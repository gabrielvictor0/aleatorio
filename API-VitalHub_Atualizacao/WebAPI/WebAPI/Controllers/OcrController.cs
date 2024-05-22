using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Domains;
using WebAPI.Utils.OCR;

namespace WebAPI.Controllers
{
    // Define que esta classe é um controlador da API e que as rotas serão prefixadas com 'api/Ocr'
    [Route("api/[controller]")]
    [ApiController]
    public class OcrController : ControllerBase
    {
        private readonly OcrService _ocrService;

        // Construtor do controlador que recebe o serviço OcrService por injeção de dependência
        public OcrController(OcrService ocrService)
        {
            _ocrService = ocrService;
        }

        // Método para reconhecer texto em uma imagem recebida via upload
        [HttpPost]
        public async Task<IActionResult> RecognizeText([FromForm]FileUploadModel fileUploadModel)
        {
            try
            {
                // Verifica se o modelo recebido é nulo ou se a imagem no modelo é nula
                if (fileUploadModel == null || fileUploadModel.Image == null)
                {
                    return BadRequest("Nenhuma imagem foi reconhecida");
                }

                // Abre um fluxo de leitura para a imagem recebida
                using (var stream = fileUploadModel.Image.OpenReadStream())
                {
                    // Chama o serviço OcrService para reconhecer o texto na imagem
                    var result = await _ocrService.RecognizeTextAsync(stream);

                    // Retorna o resultado do reconhecimento como resposta OK
                    return Ok(result);
                }
            }
            catch (Exception e)
            {
                // Retorna uma resposta de erro caso ocorra uma exceção durante o processamento
                return BadRequest("Erro ao processar    " +  e.Message);
            }
        }
    }
}
