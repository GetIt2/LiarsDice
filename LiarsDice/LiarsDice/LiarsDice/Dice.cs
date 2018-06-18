using System;
using System.Net.Mime;
using Xamarin.Forms;

namespace LiarsDice
{
    public class Dice
    {
        public int Value;
        public Random ThisRandom;

        public Dice(Random random)
        {
            ThisRandom = random;
            RollDice();
        }

        private void RollDice()
        {
            Value = ThisRandom.Next(1, 7);
        }

        public int GetDice()
        {
            return Value;
        }
    }
}
