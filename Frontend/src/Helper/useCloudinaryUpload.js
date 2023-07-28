export const useCloudinaryUpload = async (imgFile) => {
    const data = new FormData();
    data.append("file", imgFile);
    data.append("upload_preset", "formbuilderpreset");
    data.append("cloud_name", "dkvluehwi");
  
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkvluehwi/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.log(error);
      return null; 
    }
  };
  