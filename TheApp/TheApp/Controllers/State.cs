namespace TheApp.Controllers
{
    using System;
    using System.Linq;
    using Headspring;

    public class State : Headspring.Enumeration<State, string>
    {
        public static readonly State Intro = new State(1, "intro", "Introduction");
        public static readonly State EnterName = new State(2, "enter-name", "Enter Your Name");
        public static readonly State EnterAddress = new State(3, "enter-address", "Enter Your Address");
        public static readonly State Complete = new State(4, "complete", "Please Review");

        private State(int order, string value, string displayName) : base(value, displayName)
        {
            Order = order;
        }

        public int Order { get; private set; }

        public State Next
        {
            get { return GetAll().FirstOrDefault(x => x.Order == Order + 1); }
        }

        public State Previous
        {
            get { return GetAll().FirstOrDefault(x => x.Order == Order - 1); }
        }

        public decimal Progress
        {
            get
            {
                return Math.Round((Order - 1m)/(GetAll().Length - 1m), 2)*100m;
            }
        }
    }
}