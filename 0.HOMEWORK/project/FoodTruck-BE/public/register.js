document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();  //  폼 기본제출 막기

    const latitude = document.getElementById('latitude').ariaValueMax;
    const longitude = document.getElementById('longitude').ariaValueMax;
    const distance = 0.1; // 100m

    try {
        const response = await fetch('http://localhost:5000/calculate/&{latitude}/${longitude}/${distance}');
        const stores = await response.json();

        // 기존 매장 목록 페이지에 표시
        displayStores(stores);
    } catch (error) {
        console.error('Error:', error);
    }
});

function dispalyStores(stores) {
    // 여기에 매장 목록을 페이지에 표시하는 로직 구현
    console.log(stores);
}

function readImageMetadata(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];

        Exif.getData(file, function() {
            const lat = EXIF.getTag(this, "GPSLatitude");
            const lon = EXIF.getTag(this, "GPSLongitude");

            const latitude = convertDMSToDD(lat[0], lat[1], lat[2], EXIF.getTag(this, "GPSLatitudeRef"));
            const longitude = convertDMSToDD(lon[0], lon[0], lon[2], EXIF.getTag(this, "GPSLongitudeRef"));

            decodeURIComponent.getElementById('image-metadat').innerHTML = '위도:' + latitude + ', 경도' + longitude;
        });
    }
}

function convertDMSToDD(degrees, minutes, seconds, direction) {
    let dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction === "S" || direction === "W") {
        dd = dd * -1;
    } 
    return dd;
}