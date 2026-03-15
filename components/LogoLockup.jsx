import Image from 'next/image';

export default function LogoLockup({ className = '' }) {
  return (
    <div className={`logo-lockup ${className}`.trim()}>
      <Image
        src="/assetts/daria_zelous_trans.webp"
        alt="Dara Thai Dance School logo"
        className="logo-lockup__img"
        width={560}
        height={480}
        priority
      />
      <div className="logo-lockup__text">
        <span className="logo-lockup__thai">ดารานาฏศิลป์ไทย</span>
        <span className="logo-lockup__title">Dara Thai</span>
        <span className="logo-lockup__subtitle">Dancing School</span>
      </div>
    </div>
  );
}
