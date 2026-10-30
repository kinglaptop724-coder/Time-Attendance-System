// Service worker แบบเรียบง่าย: เก็บแค่หน้าห่อ ส่วนระบบจริงโหลดจาก Apps Script เสมอ
const CACHE = 'attendance-shell-v4';
const SHELL = ['./', './index.html', './icon-192.png'];
self.addEventListener('install', e => {
  // เก็บทีละไฟล์ ถ้าไฟล์ใดโหลดไม่ได้ก็ไม่ทำให้การติดตั้ง service worker ล้มเหลว
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
