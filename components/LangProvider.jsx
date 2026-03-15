'use client';
import { createContext, useEffect, useMemo, useState } from 'react';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

const dict = {
  en: {
    site_name: 'Dara Thai Dance School',
    nav_about: 'About', nav_classes: 'Classes', nav_facebook: 'Facebook', nav_contact: 'Contact', nav_events: 'Events',
    hero_title: 'Thai Dance & Culture in Perth',
    hero_desc: 'A welcoming dance school sharing the beauty of traditional and folk Thai dance for all ages—performances, workshops, and weekly classes.',
    cta_join: 'Join a Class', cta_fb: 'See Latest on Facebook',
    about_title: 'About the School',
    about_body: 'Founded by accredited Thai dramatic arts practitioners, we preserve and promote Thai culture in Western Australia through authentic technique, costuming, and live performance.',
    quick_details: 'Quick Details', location: 'Location', phone: 'Phone', email: 'Email', facebook: 'Facebook',
    classes_title: 'Classes',
    timetable_note: 'For current timetable, see our Facebook updates or get in touch.',
    kids_title: 'Kids & Teens', kids_desc: 'Foundations in posture, gesture, rhythm, and repertoire—fun, disciplined, and supportive.',
    adults_title: 'Adults', adults_desc: 'Beginner to intermediate technique with conditioning and cultural context.',
    troupe_title: 'Performance Troupe', troupe_desc: 'Rehearsals for festivals and events. By invitation or audition.',
    fb_title: 'Latest from Facebook', fb_sub: 'News, photos and events direct from our page.',
    contact_title: 'Contact',
    contact_desc: 'Bookings, workshops, or enrolments—send us a message on Facebook or email and we’ll get back to you.',
    msg_fb: 'Message on Facebook', open_maps: 'Open in Maps',
    social_title: 'Follow & Watch',
    ig_title: 'Instagram',
    ig_desc: 'See photos and reels from our classes and performances.',
    ig_follow: 'Follow on Instagram',
    yt_title: 'YouTube',
    yt_desc: 'Watch performances and behind‑the‑scenes videos.',
    yt_visit: 'Visit our YouTube channel'
  },
  th: {
    site_name: 'ดารานาฏศิลป์ไทย',
    nav_about: 'เกี่ยวกับ', nav_classes: 'คอร์สเรียน', nav_facebook: 'เฟซบุ๊ก', nav_contact: 'ติดต่อ',
    hero_title: 'รำไทยและวัฒนธรรมไทยในเพิร์ธ',
    hero_desc: 'โรงเรียนสอนรำไทยสำหรับทุกวัย ถ่ายทอดความงดงามของนาฏศิลป์ไทย ทั้งคลาสสิกและพื้นบ้าน มีการแสดง เวิร์กช็อป และเรียนประจำสัปดาห์',
    cta_join: 'สมัครเรียน', cta_fb: 'อัปเดตล่าสุดบนเฟซบุ๊ก',
    about_title: 'เกี่ยวกับโรงเรียน',
    about_body: 'สืบสานวัฒนธรรมไทยในออสเตรเลียตะวันตก ผ่านเทคนิคที่ถูกต้อง การแต่งกาย และการแสดงสด ยินดีต้อนรับตั้งแต่ผู้เริ่มต้นจนถึงขั้นสูง',
    quick_details: 'ข้อมูลด่วน', location: 'ที่ตั้ง', phone: 'โทร', email: 'อีเมล', facebook: 'เฟซบุ๊ก',
    classes_title: 'คอร์สเรียน',
    timetable_note: 'ติดตามตารางเรียนล่าสุดได้จากหน้าเฟซบุ๊กหรือสอบถามเรา',
    kids_title: 'เด็กและเยาวชน', kids_desc: 'พื้นฐานท่าทาง จังหวะ และชุดการแสดง บรรยากาศสนุกแต่มีวินัย',
    adults_title: 'ผู้ใหญ่', adults_desc: 'ตั้งแต่เริ่มต้นถึงระดับกลาง พร้อมการเสริมความแข็งแรงและบริบททางวัฒนธรรม',
    troupe_title: 'คณะการแสดง', troupe_desc: 'ซ้อมเพื่อขึ้นเวทีในงานเทศกาลและอีเวนต์ รับเชิญหรือตามการคัดเลือก',
    fb_title: 'อัปเดตจากเฟซบุ๊ก', fb_sub: 'ข่าว รูปภาพ และกิจกรรมจากเพจของเรา',
    contact_title: 'ติดต่อ',
    contact_desc: 'จองการแสดง เวิร์กช็อป หรือสมัครเรียน ส่งข้อความทางเฟซบุ๊กหรืออีเมลถึงเรา',
    msg_fb: 'ส่งข้อความในเฟซบุ๊ก', open_maps: 'เปิดแผนที่'
  }
};

export function t(lang, key){
  return dict[lang]?.[key] ?? key;
}

export default function LangProvider({ children }){
  const [lang, setLang] = useState('en'); // set to 'th' if you prefer Thai by default

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('lang');
    if(saved) setLang(saved);
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined') localStorage.setItem('lang', lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}
