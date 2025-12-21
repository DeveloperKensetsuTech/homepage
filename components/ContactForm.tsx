'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          company: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="section">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="tech-card">
          <h3 style={{ marginBottom: '2rem' }}>無料相談お申し込み</h3>

          {status === 'success' && (
            <div
              ref={successRef}
              style={{
                textAlign: 'center',
                padding: '3rem 2rem',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <i className="fas fa-check" style={{ fontSize: '2.5rem', color: 'white' }}></i>
              </div>
              <h3 style={{ color: '#065f46', marginBottom: '1rem', fontSize: '1.5rem' }}>
                送信完了しました
              </h3>
              <p style={{ color: '#1f2937', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                お問い合わせありがとうございます。
              </p>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                3営業日以内にご連絡いたします。
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => setStatus('idle')}
              >
                新しいお問い合わせ
              </button>
            </div>
          )}

          {status !== 'success' && (
            <>
              {status === 'error' && (
                <div
                  style={{
                    background: '#fee2e2',
                    color: '#991b1b',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    marginBottom: '2rem',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="company">
                会社名 *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="form-input"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  お名前 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="position">
                  役職
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  className="form-input"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="service">
                ご興味のあるサービス *
              </label>
              <select
                id="service"
                name="service"
                className="form-input"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">選択してください</option>
                <option value="dx-app">DXアプリ開発・運用</option>
                <option value="efficiency">業務効率化ツール導入</option>
                <option value="consulting">DX戦略コンサルティング</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="budget">
                予算感
              </label>
              <select
                id="budget"
                name="budget"
                className="form-input"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">選択してください</option>
                <option value="under-30">30万円未満</option>
                <option value="30-50">30万円〜50万円</option>
                <option value="50-100">50万円〜100万円</option>
                <option value="100-300">100万円〜300万円</option>
                <option value="over-300">それ以上</option>
                <option value="undecided">未定</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="timeline">
                導入希望時期
              </label>
              <select
                id="timeline"
                name="timeline"
                className="form-input"
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="">選択してください</option>
                <option value="asap">すぐに</option>
                <option value="1-3months">1〜3ヶ月以内</option>
                <option value="3-6months">3〜6ヶ月以内</option>
                <option value="6-12months">6ヶ月〜1年以内</option>
                <option value="over-1year">1年以上先</option>
                <option value="undecided">未定</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">
                お問い合わせ内容 *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="現在の課題やご要望など、できるだけ詳しくお聞かせください。"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'loading'}
                style={{
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  opacity: status === 'loading' ? 0.7 : 1,
                  border: 'none',
                }}
              >
                {status === 'loading' ? '送信中...' : 'お問い合わせを送信'}
              </button>
            </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
