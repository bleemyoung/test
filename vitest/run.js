function defineFixture(setup, cleanup) {
  return async function (runTest) {
    const resource = setup();
    try {
      await runTest(resource);
    } finally {
      cleanup(resource);
    }
  };
}


const withCart = defineFixture(
  () => ({ items: [] }),
  (cart) => { cart.items.length = 0; }
);

// 使用方式不变
(async () => {
  await withCart(async (cart) => {
    cart.items.push({ sku: "book" });
    console.log(cart.items.length); // 1
  });
})();