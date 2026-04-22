'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

const services = [
  { value: '', label: '選択してください' },
  { value: 'dx-app', label: 'DXアプリ開発・運用' },
  { value: 'efficiency', label: '業務効率化ツール導入' },
  { value: 'consulting', label: 'DX戦略コンサルティング' },
  { value: 'other', label: 'その他' },
];

const budgets = [
  { value: '', label: '選択してください' },
  { value: 'under-30', label: '30万円未満' },
  { value: '30-50', label: '30万円〜50万円' },
  { value: '50-100', label: '50万円〜100万円' },
  { value: '100-300', label: '100万円〜300万円' },
  { value: 'over-300', label: 'それ以上' },
  { value: 'undecided', label: '未定' },
];

const timelines = [
  { value: '', label: '選択してください' },
  { value: 'asap', label: 'すぐに' },
  { value: '1-3months', label: '1〜3ヶ月以内' },
  { value: '3-6months', label: '3〜6ヶ月以内' },
  { value: '6-12months', label: '6ヶ月〜1年以内' },
  { value: 'over-1year', label: '1年以上先' },
  { value: 'undecided', label: '未定' },
];

const initialForm = {
  company: '',
  name: '',
  position: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  timeline: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === 'success' && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData(initialForm);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'エラーが発生しました');
      }
    } catch {
      setStatus('error');
      setErrorMessage('送信に失敗しました。もう一度お試しください。');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-form">
      <div className="contact-form__inner">
        <header className="contact-form__head">
          <p className="contact-form__eyebrow">
            <span className="contact-form__eyebrow-rule" aria-hidden="true" />
            Inquiry form
          </p>
          <h2 className="contact-form__title">無料相談のお申し込み</h2>
          <p className="contact-form__intro">
            必要な項目にご記入ください。3営業日以内にご担当よりご連絡いたします。
          </p>
        </header>

        {status === 'success' ? (
          <div ref={successRef} className="contact-form__success">
            <svg
              className="contact-form__success-check"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path d="M8 24 l10 10 L40 12" />
            </svg>
            <h3 className="contact-form__success-title">送信完了しました</h3>
            <p className="contact-form__success-body">
              お問い合わせありがとうございます。
              <br />
              3営業日以内にご連絡いたします。
            </p>
            <button
              type="button"
              className="contact-form__success-reset"
              onClick={() => setStatus('idle')}
            >
              新しいお問い合わせを送る
            </button>
          </div>
        ) : (
          <form className="contact-form__form" onSubmit={handleSubmit}>
            {status === 'error' && (
              <div className="contact-form__error" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="company">
                会社名<span className="contact-form__required">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="contact-form__input"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field-grid">
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="name">
                  お名前<span className="contact-form__required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-form__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="position">
                  役職
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="contact-form__input"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form__field-grid">
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="email">
                  メールアドレス<span className="contact-form__required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-form__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="phone">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="contact-form__input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="service">
                ご興味のあるサービス<span className="contact-form__required">*</span>
              </label>
              <div className="contact-form__select-wrap">
                <select
                  id="service"
                  name="service"
                  className="contact-form__select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  {services.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="contact-form__field-grid">
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="budget">
                  予算感
                </label>
                <div className="contact-form__select-wrap">
                  <select
                    id="budget"
                    name="budget"
                    className="contact-form__select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    {budgets.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="timeline">
                  導入希望時期
                </label>
                <div className="contact-form__select-wrap">
                  <select
                    id="timeline"
                    name="timeline"
                    className="contact-form__select"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    {timelines.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="contact-form__field">
              <label className="contact-form__label" htmlFor="message">
                お問い合わせ内容<span className="contact-form__required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="contact-form__textarea"
                placeholder="現在の課題やご要望など、できるだけ詳しくお聞かせください。"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__submit-row">
              <button
                type="submit"
                className="contact-form__submit"
                disabled={status === 'loading'}
              >
                <span className="contact-form__submit-label">
                  {status === 'loading' ? '送信中...' : 'お問い合わせを送信'}
                </span>
                <svg
                  className="contact-form__submit-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
