let tikToksVideos = ["Dances", "Tutorials", "DIY", "Pranks"];
let videoViews = [100000, 5000, 3000, 85000];

//
for (let i = 0; i < tikToksVideos.length; i++) {
    if (videoViews[i] > 15000) {
        console.log(`${tikToksVideos[i]} will be on the home page`);
    }
    else {
        console.log(`${tikToksVideos[i]} will be on the for you page`);
    }
}