namespace TheApp.Controllers
{
    using System;
    using System.Collections.Generic;
    using Models;

    public class CartProvider
    {
        private static readonly IDictionary<string, Cart> Carts = new Lazy<IDictionary<string, Cart>>(CreateCarts).Value;

        private static IDictionary<string, Cart> CreateCarts()
        {
            return new Dictionary<string, Cart>(StringComparer.OrdinalIgnoreCase);
        }

        public Cart GetOrCreate(string id)
        {
            Cart value;
            if (Carts.TryGetValue(id, out value))
                return value;

            var cart = new Cart(Guid.NewGuid().ToString("n"));
            Carts.Add(cart.Id, cart);
            return cart;
        }

        public Cart Get(string id)
        {
            Cart value;
            if (Carts.TryGetValue(id, out value))
                return value;

            throw new KeyNotFoundException(string.Format("No cart exists for '{0}'.", id));
        }
    }
}