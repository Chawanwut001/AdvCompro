// Input ที่มีช่องว่างเกิน
const fullName = "   Chawanwut   Intha   ";

// 1. .trim() เพื่อตัดช่องว่างหน้า–หลัง
const cleanedName = fullName.trim();
console.log(`Trimmed Name, ${cleanedName}'`);
// 2. .split(' ') เพื่อแยกสตริงเป็น Array
const nameParts = cleanedName.split(" ");
console.log("Name Parts:", nameParts);
// 3. .filter(Boolean) เพื่อกรองค่าว่างออก
const finalParts = nameParts.filter(Boolean);
console.log("Filtered Name Parts:", finalParts);
// 4. ดึงชื่อแรกออกมา
const firstName = finalParts[0];
console.log(`Hello, ${firstName}'`);
