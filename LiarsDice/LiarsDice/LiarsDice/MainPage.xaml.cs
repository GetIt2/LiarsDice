﻿using System;
using Xamarin.Forms;

namespace LiarsDice
{
    public partial class MainPage : ContentPage
    {
        public Entry Entrybox;
        public Player ThisPlayer;
        public int NumberOfPlayers;

        public MainPage()
        {
            InitializeComponent();

            Entrybox = new Entry();
            ViewCodePage();
        }

        private void ViewCodePage()
        {
            Entrybox = new Entry()
            {
                Placeholder = "Game Code",
                BackgroundColor = Color.White,
                TextColor = Color.Black
            };
            Content = new StackLayout()
            {
                BackgroundColor = Color.FromHex("#262626"),
                Children =
                {
                    new StackLayout()
                    {
                        HorizontalOptions = LayoutOptions.Center,
                        VerticalOptions = LayoutOptions.CenterAndExpand,
                        Children =
                        {
                            new Label()
                            {
                                Text = "GET Game",
                                FontSize = 60,
                                HorizontalTextAlignment = TextAlignment.Center,
                                TextColor = Color.DarkOrange
                            },
                            new Label()
                            {
                                Text = "Liar's Dice",
                                FontSize = 60,
                                HorizontalTextAlignment = TextAlignment.Center,
                                TextColor = Color.White
                            },
                        }
                    },
                    new StackLayout()
                    {
                        VerticalOptions = LayoutOptions.StartAndExpand,
                        Margin = 20,
                        Children =
                        {
                            Entrybox,
                            new Button()
                            {
                                Text = "Confirm",
                                BackgroundColor = Color.FromHex("#4d4d4d"),
                                TextColor = Color.White,
                                Command = new Command(() => { FetchGame(Entrybox.Text); })
                            }
                        }
                    }
                }
            };
        }

        private void FetchGame(string GameCode)
        {
            ViewNamePage();
        }

        private void ViewNamePage()
        {
            Entrybox = new Entry()
            {
                Placeholder = "NickName",
                BackgroundColor = Color.White,
                TextColor = Color.Black,

            };
            Content = new StackLayout()
            {
                BackgroundColor = Color.FromHex("#262626"),
                Children =
                {
                    new Label()
                    {
                        Text = "!!!InsertGameCodeHere!!!",
                        HorizontalOptions = LayoutOptions.Center,
                        VerticalOptions = LayoutOptions.CenterAndExpand,
                        FontSize = 30,
                        HorizontalTextAlignment = TextAlignment.Center,
                        TextColor = Color.DarkOrange
                    },

                    new StackLayout()
                    {
                        VerticalOptions = LayoutOptions.StartAndExpand,
                        Margin = 20,
                        Children =
                        {
                            Entrybox,
                            new Button()
                            {
                                Text = "Confirm",
                                BackgroundColor = Color.FromHex("#4d4d4d"),
                                TextColor = Color.White,
                                Command = new Command(() =>
                                {
                                    CreatePlayer(Entrybox.Text);
                                })
                            }
                        }
                    }
                }
            };
        }

        private void CreatePlayer(string name)
        {
            int playerNr = 0;
            int amountOfDice = 5;
            ThisPlayer = new Player(name, amountOfDice, playerNr);
            NumberOfPlayers = 8;
            ViewMenuPage();
        }

        private void ViewMenuPage()
        {
            Content = new StackLayout()
            {
                BackgroundColor = Color.FromHex("#262626"),
                Children =
                {
                    new Label()
                    {
                        Text = "GameCode?",
                        FontSize = 60,
                        HorizontalTextAlignment = TextAlignment.Center,
                        HorizontalOptions = LayoutOptions.Center,
                        VerticalOptions = LayoutOptions.CenterAndExpand,
                        TextColor = Color.DarkOrange
                    },
                    new StackLayout()
                    {
                        VerticalOptions = LayoutOptions.FillAndExpand,
                        Margin = new Thickness(20, 0,20,50),
                        Children =
                        {
                            new Button()
                            {
                                Text = "Show dice",
                                FontSize = 40,
                                BackgroundColor = Color.FromHex("#4d4d4d"),
                                TextColor = Color.White,
                                Command = new Command(ViewDicePage),
                                VerticalOptions = LayoutOptions.FillAndExpand
                            },
                            new Button()
                            {
                                Text = "Make a bet",
                                FontSize = 40,
                                BackgroundColor = Color.FromHex("#4d4d4d"),
                                TextColor = Color.White,
                                Command = new Command(ViewBetPage),
                                VerticalOptions = LayoutOptions.FillAndExpand
                            },
                            new Button()
                            {
                                Text = "Call out lie",
                                FontSize = 40,
                                BackgroundColor = Color.FromHex("#4d4d4d"),
                                TextColor = Color.White,
                                Command = new Command(CallOutLie),
                                VerticalOptions = LayoutOptions.FillAndExpand
                            },
                        }
                    }
                }
            };
        }

        private void CallOutLie()
        {

        }

        private void ViewBetPage()
        {
            var scrollStack = new StackLayout()
            {
                Orientation = StackOrientation.Horizontal,
                VerticalOptions = LayoutOptions.FillAndExpand,
            };
            for (int i = 1; i <= NumberOfPlayers * 5; i++)
            {
                var stackTile = GetCorrectGuessTile(i);
                scrollStack.Children.Add(stackTile);
            }
            Content = new StackLayout()
            {
                BackgroundColor = Color.FromHex("#262626"),
                Children =
                {
                    new Label()
                    {
                        Text = "Make your bet!",
                        HorizontalOptions = LayoutOptions.Center,
                        VerticalOptions = LayoutOptions.CenterAndExpand,
                        FontSize = 40,
                        TextColor = Color.DarkOrange
                    },
                    new StackLayout()
                    {
                        VerticalOptions = LayoutOptions.FillAndExpand,
                        HorizontalOptions = LayoutOptions.CenterAndExpand,
                        Children =
                        {
                            new StackLayout()
                            {
                                Orientation = StackOrientation.Horizontal,
                                Children =
                                {
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface1.png"),
                                        WidthRequest = 120,
                                    },
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface2.png"),
                                        WidthRequest = 120,
                                    },
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface3.png"),
                                        WidthRequest = 120,
                                    }
                                }
                            },
                            new StackLayout()
                            {
                                Orientation = StackOrientation.Horizontal,
                                Children =
                                {
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface4.png"),
                                        WidthRequest = 120,
                                    },
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface5.png"),
                                        WidthRequest = 120,
                                    },
                                    new Image()
                                    {
                                        Source = ImageSource.FromResource("LiarsDice.diceface.diceface6.png"),
                                        WidthRequest = 120,
                                    }
                                }
                            }
                        }
                    },
                    new ScrollView()
                    {
                        Orientation = ScrollOrientation.Horizontal,
                        VerticalOptions = LayoutOptions.FillAndExpand,
                        Content = scrollStack,
                    },
                    new Button()
                    {
                        Text = "Place bet",
                        TextColor = Color.White,
                        BackgroundColor = Color.FromHex("#4d4d4d"),
                        Margin = new Thickness(20, 0, 20, 50),
                        FontSize = 20
                    }
                }
            };
        }

        private StackLayout GetCorrectGuessTile(int i)
        {
            var returnStack = new StackLayout()
            {
                Orientation = StackOrientation.Horizontal,
                VerticalOptions = LayoutOptions.FillAndExpand
            };
            if (i % 2 == 0)
            {
                var halfI = i / 2;
                var button1 = new Button()
                {
                    BackgroundColor = Color.FromHex("#4d4d4d"),
                    Text = halfI + " Jokers",
                    FontSize = 20,
                    TextColor = Color.White,
                    VerticalOptions = LayoutOptions.FillAndExpand,
                    WidthRequest = 150,
                    Margin = 10

                };
                returnStack.Children.Add(button1);

            }
            var button2 = new Button()
            {
                BackgroundColor = Color.FromHex("#4d4d4d"),
                Text = i.ToString(),
                FontSize = 20,
                TextColor = Color.White,
                VerticalOptions = LayoutOptions.FillAndExpand,
                WidthRequest = 150,
                Margin = 10
            };
            returnStack.Children.Add(button2);
            return returnStack;
        }

        private void ViewDicePage()
        {
            var diceImages = CreateDiceImages();
            Content = new StackLayout()
            {
                BackgroundColor = Color.FromHex("#262626"),
                Children =
                {
                    new StackLayout()
                    {
                        Orientation = StackOrientation.Horizontal,
                        HorizontalOptions = LayoutOptions.CenterAndExpand,
                        VerticalOptions = LayoutOptions.EndAndExpand,
                        Children =
                        {
                            diceImages[0],
                            diceImages[2],
                            diceImages[4]

                        },
                    },
                    new StackLayout()
                    {
                        Orientation = StackOrientation.Horizontal,
                        HorizontalOptions = LayoutOptions.CenterAndExpand,
                        Children =
                        {
                            diceImages[1],
                            diceImages[3]
                        }
                    },
                    new Button()
                    {
                        Text = "Hide dice",
                        FontSize = 40,
                        BackgroundColor = Color.FromHex("#4d4d4d"),
                        VerticalOptions = LayoutOptions.CenterAndExpand,
                        TextColor = Color.White,
                        Margin = 20,
                        Command = new Command(ViewMenuPage)
                    }
                }
            };
        }

        private Image[] CreateDiceImages()
        {
            var diceImages = new Image[ThisPlayer.AmountOfDice];
            for (int i = 0; i < ThisPlayer.AmountOfDice; i++)
            {
                diceImages[i] = new Image()
                {
                    WidthRequest = 120,
                };
                var diceValueArray = ThisPlayer.ShowDice();
                if (diceValueArray[i] == 1) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface1.png");
                else if (diceValueArray[i] == 2) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface2.png");
                else if (diceValueArray[i] == 3) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface3.png");
                else if (diceValueArray[i] == 4) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface4.png");
                else if (diceValueArray[i] == 5) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface5.png");
                else if (diceValueArray[i] == 6) diceImages[i].Source = ImageSource.FromResource("LiarsDice.diceface.diceface6.png");        
            }

            return diceImages;
        }
    }
}
