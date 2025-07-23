import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

function Fetchproducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <Box sx={{ backgroundColor: "#FFD700", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontStyle: "italic", fontWeight: "bold", mb: 4 }}
        >
          Products
        </Typography>

        {/* CSS Grid with 5 columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 3,
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: 3,
                boxShadow: 6,
                backgroundColor: "white",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  backgroundColor: "#fff",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      minHeight: 48,
                    }}
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    ₹{product.price}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() =>
                    isInCart(product.id)
                      ? handleRemoveFromCart(product.id)
                      : handleAddToCart(product)
                  }
                  sx={{
                    mt: 2,
                    backgroundColor: isInCart(product.id)
                      ? "red"
                      : "green",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: isInCart(product.id)
                        ? "#b00000"
                        : "#0b8d0b",
                    },
                  }}
                >
                  {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
                </Button>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Fetchproducts;
















