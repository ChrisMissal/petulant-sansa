namespace TheApp.Controllers
{
    using System.Web.Http;
    using Models;

    public class CartController : ApiController
    {
        private readonly CartProvider _cartProvider = new CartProvider();

        public Cart Get(string id)
        {
            return _cartProvider.GetOrCreate(id);
        }

        [ActionName("next"), HttpPut]
        public Cart Next(string id)
        {
            // if validation passes
            var cart = _cartProvider.Get(id);

            cart.State = cart.State.Next;

            return cart;
        }

        [ActionName("back"), HttpPut]
        public Cart Back(string id)
        {
            // if validation passes
            var cart = _cartProvider.Get(id);

            cart.State = cart.State.Previous;

            return cart;
        }
    }
}