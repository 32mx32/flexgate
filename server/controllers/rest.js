import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const chat_id = process.env.TELEGRAM_CHAT;
const token = process.env.TELEGRAM_TOKEN;

const getMessage = ({ name, tel, model, comment, checked }) => `
<b>Заказ с сайта Flexgate.ru</b>\n
<b>Имя: </b> ${name}
<b>Телефон: </b> ${tel}
<b>Модель: </b> ${model}
<b>Коммент: </b> ${comment}
<b>Перезвонить: </b>${checked ? '\n* ПЕРЕЗВОНИТЬ КЛИЕНТУ*\n' : 'НЕТ'}
`;

export const sendMessageToBot = async (req, res) => {
  try {
    const text = getMessage(req.body);
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, null, {
      params: {
        parse_mode: 'html',
        chat_id,
        text,
      },
    });
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
