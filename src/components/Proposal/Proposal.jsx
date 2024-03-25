import './Proposal.css';
import { Link } from 'react-scroll';
import CountTimeDown from "../CountTimeDown/CountTimeDown";
// let price = 985;
// let todayPrice = 689;


export const Proposal = () => {
  return (
    <section className="proposal-section">
      
      <ul className="proposal-list">
        <li className="proposal-item">
          <img className='proposal-img'
            src={require('../../Images/proposal1.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Універсальна в підборі розміру за рахунок вільного та зручного фасону</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal2.jpg')}
            alt="Жилетка на вішаку"
          />
          <p className="proposal-item-text">Практична, ефектна та водночас натуральна тканина</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../Images/proposal3.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Продумані деталі для комфортного носіння та стильного вигляду</p>
        </li>
      </ul>
      <div className="proposal-allPrice">
        <img
          src={require('../../Images/prices1.png')}
          alt="Шаблон ціни тижня"
        />
        {/* <span className="proposal-price price-text">{price} ГРН</span>
        <span className="proposal-todayPrice price-text">{todayPrice} ГРН</span> */}
      </div>
      <h3 className='proposal-text'>Пропозиція діє ще:</h3>
      <CountTimeDown/>
      <button type='button' className='proposal-button'> <Link
      
            to="chooseColor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Обрати колір
          </Link></button>
      <p className='proposal-text'>Залишилося <span style={{ background: '#ff671e' }}>11</span> штук по акції. Встигніть замовити свій колір!</p>
    </section>
  );
};
