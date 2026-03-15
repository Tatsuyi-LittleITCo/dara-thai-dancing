'use client';
import { createContext, useEffect, useMemo, useState } from 'react';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

const dict = {
  en: {
    site_name: 'Dara Thai Dance School',
    nav_about: 'About', nav_classes: 'Classes', nav_facebook: 'Facebook', nav_contact: 'Contact', nav_events: 'Events', nav_home: 'Home',
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
    yt_visit: 'Visit our YouTube channel',
    contact_page_title: 'Contact Us!',
    contact_intro: 'We would love to meet you.',
    about_page_title: 'About Us',
    about_page_intro: 'Dara Thai Dance School in Maddington, Perth is a welcoming community hub where people of all ages and backgrounds come together to learn and celebrate traditional Thai dance. The school offers a friendly, family‑like environment, sharing Thai cultural arts through regular classes, rehearsals, and community performances. With a growing group of students and supporters, Dara Thai Dance School has become a connected local community that values culture, creativity, and inclusiveness.',
    mission_title: 'History Of Dara Thai',
    mission_body_1: "Dara Thai Dance School was created by ",
    mission_body_name1: "Krur Ploy",
    mission_body_2: " as a way to carry on the beautiful traditions taught to her by her mother, ",
    mission_body_name2: "Kru Dang",
    mission_body_3: ". What began as a personal commitment to honour her mother’s legacy has grown into a meaningful way to ensure Thai cultural heritage continues to live on in the hearts of our children and future generations. By sharing these dances, stories, and techniques with the community, Dara Thai Dance School keeps family traditions alive and preserves a connection to culture that can be passed forward with pride.",
    classes_page_title: 'Classes',
    classes_intro: 'Dara Thai Dance School offers a wide range of classes for women, men, children, and LGBTQ+ community members, creating a welcoming space where everyone can enjoy and explore traditional Thai dance. Whether students are taking their first steps, building confidence, or deepening their cultural connection, our classes are designed to celebrate individuality while bringing people together through movement, rhythm, and shared heritage. No matter your background or experience level, you are invited to learn, belong, and be part of a supportive community that values inclusivity and cultural pride.',
    events_page_title: 'Events',
    events_intro: 'Past & Upcoming Events',
    // About page offerings
    offering_styles: 'Traditional and Modern Styles (all ages)',
    offering_workshops: 'Workshops & Social Activities',
    offering_festivals: 'Community & cultural festivals',
    offering_bookings: 'Performance bookings',
    offering_thai_lang: 'Learn to Speak Thai',
    offering_cooking: 'Thai Cooking and Meal Sharing',
    // Classes timetable
    timetable_title: 'Sample Timetable (placeholder)',
    timetable_kids: 'Sat 9:30\u201310:30 \u2014 Kids Foundations',
    timetable_teens: 'Sat 10:45\u201312:00 \u2014 Teens/Adults Technique',
    timetable_troupe: 'Wed 18:00\u201319:30 \u2014 Performance Troupe Rehearsal',
    // Events
    event_festival_title: 'Community Festival Performance',
    event_festival_where: 'Perth Metro',
    event_showcase_title: 'Cultural Showcase',
    event_showcase_where: 'Venue TBA',
    event_date_tba: 'TBA',
    event_fb_updates: 'Facebook updates',
    event_date_label: 'Date',
    event_where_label: 'Where',
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
    msg_fb: 'ส่งข้อความในเฟซบุ๊ก', open_maps: 'เปิดแผนที่',
    offering_styles: 'สไตล์ดั้งเดิมและสมัยใหม่ (ทุกวัย)',
    offering_workshops: 'เวิร์กช็อปและกิจกรรมสังคม',
    offering_festivals: 'เทศกาลชุมชนและวัฒนธรรม',
    offering_bookings: 'จองการแสดง',
    offering_thai_lang: 'เรียนพูดภาษาไทย',
    offering_cooking: 'ทำอาหารไทยและแบ่งปันมื้ออาหาร',
    timetable_title: 'ตารางเรียนตัวอย่าง',
    timetable_kids: 'เสาร์ 9:30\u201310:30 \u2014 พื้นฐานเด็ก',
    timetable_teens: 'เสาร์ 10:45\u201312:00 \u2014 เทคนิควัยรุ่น/ผู้ใหญ่',
    timetable_troupe: 'พุธ 18:00\u201319:30 \u2014 ซ้อมคณะการแสดง',
    event_festival_title: 'การแสดงเทศกาลชุมชน',
    event_festival_where: 'เขตเมืองเพิร์ธ',
    event_showcase_title: 'โชว์เคสวัฒนธรรม',
    event_showcase_where: 'สถานที่ TBA',
    event_date_tba: 'TBA',
    event_fb_updates: 'อัปเดตเฟซบุ๊ก',
    event_date_label: 'วันที่',
    event_where_label: 'สถานที่',
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
