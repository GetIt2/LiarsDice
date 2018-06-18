using System;
using Xamarin.Forms;

namespace LiarsDice
{
    public class Player
    {
        public string Name;
        public int AmountOfDice;
        public int PlayerNr;
        public Dice[] Dices;
        public Random Random = new Random();

        public Player(string name, int amountOfDice, int playerNr)
        {
            Name = name;
            AmountOfDice = amountOfDice;
            PlayerNr = playerNr;
            InitDice();
        }

        private void InitDice()
        {
            Dices = new Dice[AmountOfDice];
            for (var i = 0; i < AmountOfDice; i++)
            {
                Dices[i] = new Dice(Random);
            }
        }

        public int[] ShowDice()
        {
            var diceValues = new int[Dices.Length];
            for (int i = 0; i < Dices.Length; i++)
            {
                diceValues[i] = Dices[i].GetDice();
            }

            return diceValues;
        }
    }
}
