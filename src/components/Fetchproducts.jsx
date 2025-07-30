
// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Badge,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Container,
//   Card,
//   CardMedia,
//   Button,
//   Divider,
//   Stack,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useTheme } from "@mui/material/styles";

// // Navbar Component
// function Navbar({ cartCount }) {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             onClick={toggleDrawer}
//             sx={{ display: { xs: "flex", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: "bold",
//               flexGrow: 1,
//               display: { xs: "none", md: "block" },
//             }}
//           >
//             🛍️ My E-Commerce
//           </Typography>

//           <IconButton color="inherit">
//             <Badge badgeContent={cartCount} color="error">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer}>
//           <List>
//             <ListItem>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary="Cart" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// // Fetchproducts Component
// function Fetchproducts() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         const data = await response.json();
//         setProducts(data.products); 
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     if (!cart.some((item) => item.id === product.id)) {
//       setCart([...cart, product]);
//     }
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const isInCart = (id) => cart.some((item) => item.id === id);
//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <>
//       <Navbar cartCount={cart.length} />

//       <Box sx={{ backgroundColor: "#FFD700", minHeight: "100vh", py: 4 }}>
//         <Container maxWidth="xl">
//           <Typography
//             variant="h4"
//             align="center"
//             sx={{ fontStyle: "italic", fontWeight: "bold", mb: 4 }}
//           >
//             Products
//           </Typography>

//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "repeat(1, 1fr)",
//                 sm: "repeat(2, 1fr)",
//                 md: "repeat(3, 1fr)",
//                 lg: "repeat(4, 1fr)",
//                 xl: "repeat(5, 1fr)",
//               },
//               gap: 3,
//             }}
//           >
//             {products.map((product) => (
//               <Card
//                 key={product.id}
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   borderRadius: 3,
//                   boxShadow: 6,
//                   backgroundColor: "white",
//                   height: "100%",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     height: 200,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     p: 2,
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     image={product.thumbnail}
//                     alt={product.title}
//                     sx={{
//                       maxHeight: "100%",
//                       maxWidth: "100%",
//                       objectFit: "contain",
//                     }}
//                   />
//                 </Box>

//                 <Box
//                   sx={{
//                     backgroundColor: "blue",
//                     color: "white",
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     p: 2,
//                   }}
//                 >
//                   <Box>
//                     <Typography
//                       variant="subtitle1"
//                       sx={{
//                         fontWeight: "bold",
//                         display: "-webkit-box",
//                         WebkitBoxOrient: "vertical",
//                         WebkitLineClamp: 2,
//                         overflow: "hidden",
//                         textOverflow: "ellipsis",
//                         minHeight: 48,
//                       }}
//                     >
//                       {product.title}
//                     </Typography>

//                     <Typography
//                       variant="body1"
//                       sx={{ mt: 1, fontWeight: "bold" }}
//                     >
//                       ₹{product.price}
//                     </Typography>
//                   </Box>

//                   <Button
//                     fullWidth
//                     variant="contained"
//                     onClick={() =>
//                       isInCart(product.id)
//                         ? handleRemoveFromCart(product.id)
//                         : handleAddToCart(product)
//                     }
//                     sx={{
//                       mt: 2,
//                       backgroundColor: isInCart(product.id) ? "red" : "green",
//                       color: "white",
//                       fontWeight: "bold",
//                       "&:hover": {
//                         backgroundColor: isInCart(product.id)
//                           ? "#b00000"
//                           : "#0b8d0b",
//                       },
//                     }}
//                   >
//                     {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
//                   </Button>
//                 </Box>
//               </Card>
//             ))}
//           </Box>

//           {/* View Cart */}
//           <Box
//             sx={{
//               mt: 6,
//               p: 4,
//               backgroundColor: "white",
//               borderRadius: 4,
//               boxShadow: 4,
//             }}
//           >
//             <Typography variant="h4" gutterBottom>
//               🛒 View Cart
//             </Typography>

//             {cart.length === 0 ? (
//               <Typography variant="body1">Your cart is empty.</Typography>
//             ) : (
//               <>
//                 {cart.map((product) => (
//                   <Box
//                     key={product.id}
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "space-between",
//                       flexDirection: isSmall ? "column" : "row",
//                       my: 2,
//                       border: "1px solid #ccc",
//                       borderRadius: 2,
//                       p: 2,
//                       gap: 2,
//                     }}
//                   >
//                     <Stack
//                       direction="row"
//                       spacing={2}
//                       alignItems="center"
//                       sx={{ width: "100%" }}
//                     >
//                       <CardMedia
//                         component="img"
//                         image={product.thumbnail}
//                         alt={product.title}
//                         sx={{
//                           height: 60,
//                           width: 60,
//                           objectFit: "contain",
//                           mr: 2,
//                         }}
//                       />
//                       <Typography variant="body1">{product.title}</Typography>
//                     </Stack>

//                     <Stack
//                       direction="row"
//                       spacing={2}
//                       alignItems="center"
//                       sx={{ mt: { xs: 2, sm: 0 } }}
//                     >
//                       <Typography variant="body1">
//                         ₹{product.price}
//                       </Typography>
//                       <Button
//                         variant="outlined"
//                         color="error"
//                         onClick={() => handleRemoveFromCart(product.id)}
//                       >
//                         Remove
//                       </Button>
//                     </Stack>
//                   </Box>
//                 ))}

//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="h6" align="right">
//                   Total: ₹{total.toFixed(2)}
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }

// export default Fetchproducts;

import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, IconButton, Badge, Drawer, List,
  ListItem, ListItemText, Box, Container, Card, CardMedia,
  Button, Divider, Stack, useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function Navbar({ cartCount }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              flexGrow: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            🛍️ My E-Commerce
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton color="inherit">
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/login";
              }}
              sx={{ fontWeight: "bold" }}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer}>
          <List>
            <ListItem><ListItemText primary="Home" /></ListItem>
            <ListItem><ListItemText primary="Cart" /></ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

function Fetchproducts() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
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
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Box sx={{ backgroundColor: "#FFD700", minHeight: "100vh", py: 4 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", mb: 4 }}
          >
            Products
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
                xl: "repeat(5, 1fr)",
              },
              gap: 3,
            }}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 6,
                  backgroundColor: "white",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.thumbnail}
                    alt={product.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>

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
                      backgroundColor: isInCart(product.id) ? "red" : "green",
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

          <Box
            sx={{
              mt: 6,
              p: 4,
              backgroundColor: "white",
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            <Typography variant="h4" gutterBottom>
              🛒 View Cart
            </Typography>

            {cart.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              <>
                {cart.map((product) => (
                  <Box
                    key={product.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexDirection: isSmall ? "column" : "row",
                      my: 2,
                      border: "1px solid #ccc",
                      borderRadius: 2,
                      p: 2,
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ width: "100%" }}
                    >
                      <CardMedia
                        component="img"
                        image={product.thumbnail}
                        alt={product.title}
                        sx={{
                          height: 60,
                          width: 60,
                          objectFit: "contain",
                          mr: 2,
                        }}
                      />
                      <Typography variant="body1">{product.title}</Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mt: { xs: 2, sm: 0 } }}
                    >
                      <Typography variant="body1">
                        ₹{product.price}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" align="right">
                  Total: ₹{total.toFixed(2)}
                </Typography>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Fetchproducts;



