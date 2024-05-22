using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;
using System.Diagnostics;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {
        // Chave de assinatura para acessar o serviço de Visão Computacional da Azure
        private readonly string _subscriptionKey = "";

        // Endpoint do serviço de Visão Computacional da Azure
        private readonly string _endpoint = "";

        // Método para reconhecer texto em uma imagem
        public async Task<string> RecognizeTextAsync(Stream imageStream)
        {
            try
            {
                // Cria um cliente para acessar o serviço de Visão Computacional
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptionKey))
                {
                    Endpoint = _endpoint
                };

                // Realiza o reconhecimento de texto na imagem
                var OcrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                // Processa o resultado do reconhecimento
                return ProcessRecognitionResult(OcrResult);
            }
            catch (Exception e)
            {
                // Retorna uma mensagem de erro caso ocorra uma exceção
                return "Erro Ao Ler " + e.Message;
            }
        }

        // Método para processar o resultado do reconhecimento de texto
        public static string ProcessRecognitionResult(OcrResult ocrResult)
        {
            string recognizeText = "";

            // Itera sobre as regiões, linhas e palavras reconhecidas
            foreach (var region in ocrResult.Regions)
            {
                foreach (var line in region.Lines)
                {
                    foreach (var word in line.Words)
                    {
                        // Adiciona o texto de cada palavra ao resultado final
                        recognizeText += word.Text + " ";
                    }

                    // Adiciona uma quebra de linha após cada linha
                    recognizeText += "\n";
                }
            }

            // Retorna o texto reconhecido
            return recognizeText;
        }
    }
}
