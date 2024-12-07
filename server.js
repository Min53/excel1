const express = require('express');
const XLSX = require('xlsx');
const path = require('path');

const app = express();
const PORT = 3000;

// 엑셀 파일 경로 설정
const excelFilePath = path.join(__dirname, 'data.xlsx');

app.use(express.static('public'));

// API 엔드포인트
app.get('/get-members', (req, res) => {
    const workbook = XLSX.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    res.json(data);
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
