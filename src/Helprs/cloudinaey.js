
export const uploadImage = cloudinary.createUploadWidget({
    cloudName: "dlmsjpzl2",
    uploadPreset: "rftes_movika",
    sources: ["local", "url"],
    clientAllowedFormats: ["jpg", "jpeg", "png"],
    cropping: true
    }, async (error, result) => {
    if (!error && result && result.event === "success") {
        console.log(result.info.url)
        return result.info.url
    }
}
)