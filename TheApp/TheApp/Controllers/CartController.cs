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

        public Cart Put(string id, object data)
        {
            // if validation passes
            var cart = _cartProvider.Get(id);

            cart.State = cart.State.Next;

            return cart;
        }
    }
}