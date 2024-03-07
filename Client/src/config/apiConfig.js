let apiUrl;

if (process.env.NODE_ENV === "production") {
  apiUrl = "https://e-commerce-api-mqlp.onrender.com/";
} else {
  apiUrl = "http://localhost:3000/api/v1/";
}

export { apiUrl };
