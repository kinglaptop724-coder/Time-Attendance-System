# ระบบบันทึกเวลาการปฏิบัติงาน (หน้าห่อสำหรับ GitHub Pages)

หน้านี้ฝังระบบจริงที่รันบน Google Apps Script (ลิงก์อยู่ในไฟล์ `index.html` ภายในแท็ก `<iframe>`)
และมีตัวช่วยติดตั้งเป็นแอป (PWA) บนมือถือ

## วิธีใช้
1. สร้าง repository บน GitHub (ตั้งชื่ออะไรก็ได้)
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ (รวมไฟล์ `.nojekyll`) ไปที่ราก (root) ของ repo
3. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save
4. เว็บจะอยู่ที่ `https://ชื่อผู้ใช้.github.io/ชื่อrepo/` (หรือ `https://ชื่อผู้ใช้.github.io/` ถ้าตั้งชื่อ repo เป็น `ชื่อผู้ใช้.github.io`)

## หมายเหตุ
- ทุก path เป็นแบบสัมพัทธ์ จึงใช้ได้กับ repo ทุกชื่อ
- ถ้าเปลี่ยนลิงก์ Apps Script ให้แก้ที่ `src` ของ `<iframe>` ใน `index.html` (คง `?src=netlify` ไว้)
