namespace LiarsDice
{
    public class GameRulesFields
    {
        public FirebaseValue AmountOfPlayers { get; set; }
        public FirebaseValue AmountOfPlayersAllowed { get; set; }
        public FirebaseValue GameSessionOpen { get; set; }
        public FirebaseValue IsBossMode { get; set; }
        public FirebaseValue TotalDiceCount { get; set; }

        public int GetAmountOfPlayers()
        {
            return AmountOfPlayers.integerValue;
        }

        public int GetAmountOfPlayersAllowed()
        {
            return AmountOfPlayersAllowed.integerValue;
        }

        public bool GetGameSessionOpen()
        {
            return GameSessionOpen.booleanValue;
        }

        public bool GetIsBossMode()
        {
            return IsBossMode.booleanValue;
        }

        public int GetTotalDiceCount()
        {
            return TotalDiceCount.integerValue;
        }

    }
}
