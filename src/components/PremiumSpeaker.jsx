import React from 'react';
import './styles/css/layout/PremiumSpeaker.css';

function PremiumSpeaker() {
  return (
    <article className="premium">
      <div className="circle">
        <div className="circle__item" />
        <div className="circle__item" />
        <div className="circle__item" />
        <img src="https://img.search.brave.com/QSbR2e1WC3Zz1Hx_PBk49oA_SJBirwyFACi8xd5VGAA/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9maWxl/cy5zb2Z0aWNvbnMu/Y29tL2Rvd25sb2Fk/L29iamVjdC1pY29u/cy9pbWF4LXNwZWFr/ZXJzLWljb25zLWJ5/LW14LXN0ZWVsL3Bu/Zy81MTIvU3BlYWtl/ciUyMGJsYWNrLnBu/Zw" alt="" className="premium__image" />
      </div>
      <section className="premium__article">
        <span className="premium__name">
          ZX9
          <br />
          {' '}
          SPEAKER
        </span>
        <p className="premium__description">
          Upgrade to premium speakers that are
          <br />
          {' '}
          phenomenally built to deliver truly remarkable
          <br />
          {' '}
          sound.
        </p>
        <button type="button" className="premium__link">SEE PRODUCT</button>
      </section>
    </article>
  );
}

export default PremiumSpeaker;
