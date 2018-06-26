using System;
using System.Net;
using Newtonsoft.Json;

namespace LiarsDice
{
    public class Firebase
    {
        private string _baseUrl = "https://firestore.googleapis.com/v1beta1/";
        private string _thisGameUrl;

        public Firebase(string projectId, string gameCode, string apiKey)
        {
            _thisGameUrl = $"{_baseUrl}projects/{projectId}/databases/(default)/documents/{gameCode}?key={apiKey}";
        }

        public string GetDatabaseContent()
        {
            var json = new WebClient().DownloadString(_thisGameUrl);
            var jsonString = Convert.ToString(json);
            return jsonString;
        }
    }
}
