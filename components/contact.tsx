'use client';

import {useState, type FormEvent} from 'react';
import './contact.css';
import {ArrowRight, ArrowUpRight, Mail, MapPin, Phone} from 'lucide-react';

const email = 'aristocratgastrobar@gmail.com';
const map = 'https://yandex.ru/maps/org/aristokrat/34201371324/';

export default function Contact({bookingUrl}: {bookingUrl: string}) {
  const [prepared, setPrepared] = useState(false);

  function composeEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const body = [
      `Имя: ${String(fields.get('name')).trim()}`,
      `Телефон: ${String(fields.get('phone')).trim()}`,
      fields.get('email') ? `Почта: ${String(fields.get('email')).trim()}` : '',
      '',
      String(fields.get('message') || '').trim(),
    ].filter((line, index) => line || index === 3).join('\n');
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('Обратная связь — АристократЪ')}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }

  return <section className="section contact-page">
    <div className="page-heading contact-heading">
      <a className="breadcrumb-link" href="/">Главная <ArrowRight size={12}/></a>
      <h1>Контакты</h1>
      <p>Будем рады встрече. И всегда на связи.</p>
    </div>

    <div className="contact-grid">
      <div className="contact-info">
        <span className="eyebrow">В самом сердце Уфы</span>
        <h2>Заглядывайте<br/>в <em>АристократЪ.</em></h2>
        <div className="contact-rows">
          <a className="contact-row" href={map} target="_blank" rel="noreferrer">
            <MapPin size={19} aria-hidden="true"/>
            <span><small>Наш адрес</small><strong>г. Уфа, улица Ленина, 75</strong></span>
            <ArrowUpRight size={17} aria-hidden="true"/>
          </a>
          <a className="contact-row" href="tel:+79033107576">
            <Phone size={19} aria-hidden="true"/>
            <span><small>Позвонить нам</small><strong>8 (903) 310-75-76</strong></span>
            <ArrowUpRight size={17} aria-hidden="true"/>
          </a>
          <a className="contact-row" href={`mailto:${email}`}>
            <Mail size={19} aria-hidden="true"/>
            <span><small>Написать на почту</small><strong>{email}</strong></span>
            <ArrowUpRight size={17} aria-hidden="true"/>
          </a>
        </div>
        <div className="contact-actions">
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Забронировать столик <ArrowUpRight size={17}/></a>
          <a className="text-link" href="https://vk.com/aristocratufa" target="_blank" rel="noreferrer">Мы ВКонтакте <ArrowUpRight size={15}/></a>
        </div>
      </div>

      <div className="contact-form-panel">
        <span className="eyebrow">Есть вопросы или предложения?</span>
        <h2>Напишите нам</h2>
        <p className="contact-form-intro">О вашем вечере, особом поводе или просто о том, что важно.</p>
        <form className="contact-form" onSubmit={composeEmail} onChange={()=>setPrepared(false)}>
          <div className="contact-fields">
            <label>Ваше имя <span>*</span><input name="name" autoComplete="name" placeholder="Как к вам обращаться" required maxLength={80} pattern=".*\S.*"/></label>
            <label>Телефон <span>*</span><input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+7 (___) ___-__-__" required maxLength={25} onInput={event=>{const input=event.currentTarget;const count=input.value.replace(/\D/g,'').length;input.setCustomValidity(count>=10&&count<=15?'':'Введите телефон от 10 до 15 цифр')}}/></label>
            <label className="contact-field-wide">Электронная почта <span className="field-optional">необязательно</span><input type="email" name="email" autoComplete="email" placeholder="example@mail.ru" maxLength={150}/></label>
            <label className="contact-field-wide">Сообщение<textarea name="message" placeholder="Расскажите, чем мы можем помочь" rows={3} maxLength={1500}/></label>
          </div>
          <label className="contact-consent"><input type="checkbox" name="consent" required/><span>Согласен на обработку персональных данных и с <a href="/politics" target="_blank" rel="noreferrer">политикой конфиденциальности</a>.</span></label>
          <div className="contact-form-bottom"><button className="button" type="submit">Отправить по почте <ArrowUpRight size={17}/></button><p>Откроется ваше почтовое приложение<br/>с готовым письмом.</p></div>
          {prepared&&<p className="contact-form-status" role="status">Письмо подготовлено. Отправьте его в почтовом приложении. Если оно не открылось, напишите на <a href={`mailto:${email}`}>{email}</a> или позвоните нам. Поля формы сохранены.</p>}
        </form>
      </div>
    </div>

    <section className="contact-map-section" aria-labelledby="contact-map-title">
      <div className="contact-map-heading"><div><span className="eyebrow">До встречи на Ленина, 75</span><h2 id="contact-map-title">Найти нас легко</h2></div><a className="text-link" href={map} target="_blank" rel="noreferrer">Открыть в Яндекс Картах <ArrowUpRight size={17}/></a></div>
      <div className="contact-map"><iframe title="Гастробар АристократЪ на карте — Уфа, улица Ленина, 75" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af781f72683888e602981c46613909fec6bb98370433be781178f8a9e898f5a52&source=constructor&scroll=false" loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div>
    </section>
  </section>;
}
