namespace TheApp.Models
{
    using Controllers;

    public class Cart
    {
        public Cart(string id)
        {
            Id = id;
            State = State.Intro;
        }

        public string Id { get; set; }

        public State State { get; set; }

        public string Redirect { get; set; }
    }
}
