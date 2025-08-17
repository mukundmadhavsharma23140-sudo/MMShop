export default function HomePage() {
  const products = [
    { id: 1, name: "Smartphone", price: "$499" },
    { id: 2, name: "Laptop", price: "$899" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Latest Products
      </h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
