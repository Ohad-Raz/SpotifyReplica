const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dnrigpcaz",
  api_key: "516528481198751",
  api_secret: "OCDku7THggj2e7AIKiW9n4c6hrQ",
});
uploadToCloudinary = (path, folder) => {
  return cloudinary.v2.uploader
    .upload(path, {
      folder,
      resource_type: "auto",
    })
    .then((data) => {
      return { url: data.url, public_id: data.public_id };
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = { uploadToCloudinary };
