import { useState, useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //const res = await fetch(`/api/products?keyword=${keyword}&category=${category}&page=${page}`);
        const res = await fetch(`http://localhost:5000/api/products?keyword=${keyword}&category=${category}&page=${page}`);

        const data = await res.json();
        setProducts(data.products);
        setPages(data.pages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [keyword, category, page]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Latest Products</h1>

      {/* Search & Filter */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{ padding: "0.5rem", width: "200px", marginRight: "1rem" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "0.5rem", width: "150px" }}
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </div>

      {/* Products */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "200px",
                textAlign: "center",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "0.5rem" }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          style={{ padding: "0.5rem 1rem", marginRight: "1rem" }}
        >
          Prev
        </button>
        <span>Page {page} of {pages}</span>
        <button
          disabled={page >= pages}
          onClick={() => setPage(page + 1)}
          style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
