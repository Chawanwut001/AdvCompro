const registerDate = new Date("2023-09-17T10:30:00Z");

const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',  
    timeZone: 'Asia/Bangkok',     // << ต้องใช้ timeZone
    timeZoneName: 'short'         // แสดงชื่อโซนเวลา เช่น GMT+7
};

const formattedDate = registerDate.toLocaleString('th-TH', options);
console.log("Registration Date in Bangkok Timezone:", formattedDate);
