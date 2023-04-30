import React from 'react';
import "../style.css";
import instagram from "../photo/instagram.svg";

function Footer_menu() {
  return (
   <>
   <div className='container'>
    <div className='big_footer'>
        <div className='footer_item_1'>
            <span>О нас</span>
            <p>Пунты выдачи</p>
            <p>Вакансии</p>
        </div>
        <div className='footer_item_2'>
        <span>Пользователям</span>
        <p>Связаться с нами</p>
        <p>Вопрос-Ответ</p>
        </div>
        <div className='footer_item_3'>
        <span>Для предпринимателей</span>
        <p>Продавайте на Uzum</p>
        <p>Вход для продавцов</p>
        </div>
        <div className='footer_item_4'>
        <span>Скачать приложение</span>
        <p>AppSotre</p>
        <p>Google Play</p>
        <div className='insta_logo'>
        <p>Uzum в соцсетях</p>
        <img src={instagram} /> <span><img src={instagram} /></span>
    </div>
        </div>
    </div>
    
    <div className='mini_footer'>
        <p>Соглашение о конфиденциальности <span>Пользовательское соглашение</span></p>
        <p>«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
    </div>
    </div>
   </>
  )
}

export default Footer_menu