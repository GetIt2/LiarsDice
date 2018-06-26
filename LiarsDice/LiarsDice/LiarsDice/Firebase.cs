using System;
using System.Diagnostics;
using System.Net;
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
            var json = new WebClient().DownloadString($"{_thisGameUrl}/GameRules{_urlEnd}");
            GameRules gameRules = JsonConvert.DeserializeObject<GameRules>(json);
            
            return gameRules;
        }
    }
}
