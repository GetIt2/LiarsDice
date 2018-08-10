using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace LiarsDice
{
    public class Firebase
    {
        private string _baseUrl = "https://firestore.googleapis.com/v1beta1/";
        private string _thisGameUrl;
        private string _urlEnd;

        public Firebase(string projectId, string gameCode, string apiKey)
        {
            _thisGameUrl = $"{_baseUrl}projects/{projectId}/databases/(default)/documents/{gameCode}";
            _urlEnd = $"?key={apiKey}";
        }

        public GameRules GetGameRules()
        {
            var request = WebRequest.Create($"{_thisGameUrl}/GameRules{_urlEnd}");
            request.ContentType = "application/json";
            request.Method = "GET";

            using (HttpWebResponse response = request.GetResponse() as HttpWebResponse)
            {
                if (response.StatusCode != HttpStatusCode.OK)
                    Debug.WriteLine("Error fetching data. Server returned status code: {0}", response.StatusCode);
                using (StreamReader reader = new StreamReader(response.GetResponseStream()))
                {
                    var content = reader.ReadToEnd();
                    if (string.IsNullOrWhiteSpace(content))
                    {
                        Debug.WriteLine("Response contained empty body...");
                    }
                    else
                    {
                        GameRules gameRules = JsonConvert.DeserializeObject<GameRules>(content);
                        return gameRules;
                    }
                }
            }

            return null;
        }

        public void SendPlayerData()
        {
            // CreatePlayer in firebase
            // Give player a number, and send name
            // 
            // 
        }

        public void SendGameRules()
        {
            // Update amount of players
            // TotalDiceCount
            // 
        }
    }
}
