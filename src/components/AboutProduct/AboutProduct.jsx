import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Тканина" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>Сорочка приємна до тіла та дозволяє шкірі дихати за рахунок бавовни в складі, а завдяки доданому поліестеру робить сорочку довговічною та стійкою до зминання, структура в балансі між м'якістю та здатністю тримати форму.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Рукава" />
          <h4 className='aboutProduct-listTitle'>Рукава</h4>
          <p className='aboutProduct-listText'>Рукава мають волани на манжетах та зав'язку, що роблять кисть руки жіночною, вони додають сорочці невимушеної елегантності не втрачаючи її простоти. Достатньо вільні, завязка дозволяє зафіксувати на кисті і підкорегувати довжину. Волани можна заховати в середину.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Фасон" />
          <h4 className='aboutProduct-listTitle'>Фасон</h4>
          <p className='aboutProduct-listText'>Злегка подовжена спинка додає невимушеності образу та допоможе прибрати недоліки фігури візуально зменшуючи сідниці та стегна.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../Images/aboutProduct4.jpg')}alt=" Універсальність" />
          <h4 className='aboutProduct-listTitle'> Універсальність</h4>
          <p className='aboutProduct-listText'>Завдяки продуманому та сучасному фасону сорочки один і той самий розмір може чудово сидіти на різних параметрах створюючи різний силует фігури не втрачаючи чудовий вигляд.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct5.jpg')} alt="Комірець" />
          <h4 className='aboutProduct-listTitle'>Комірець</h4>
          <p className='aboutProduct-listText'>Добре укріплений та проглажений класичний комірець, що за рахунок якісної стійкої тканини добре тримає задану форму.</p>
        </li>
      
      </ul>
    </section>
  );
};
