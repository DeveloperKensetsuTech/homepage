export default function ContactInfo() {
  return (
    <section className="contact-direct">
      <div className="contact-direct__inner">
        <p className="contact-direct__eyebrow">
          <span className="contact-direct__eyebrow-rule" aria-hidden="true" />
          Direct contact
        </p>
        <h3 className="contact-direct__title">
          メールで直接ご連絡いただくこともできます
        </h3>
        <a
          href="mailto:info@kensetsu-tech.com"
          className="contact-direct__email"
        >
          info@kensetsu-tech.com
        </a>
        <p className="contact-direct__note">3営業日以内にご返信いたします</p>
      </div>
    </section>
  );
}
