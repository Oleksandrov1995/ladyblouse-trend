import './ProductSize.css';

export const ProductSize = () => {
  return (
    <section id="productSize" className='productSize'>
      <h2>Розмірна сітка та заміри виробу</h2>
      <table className='productSize-table'>
  <thead>
    <tr>
      <th>Розмір</th>
      <th>Ваш обхват грудей, см</th>
      <th>Обхват грудей виробу, см</th>
      <th>Довжина ззаду, см</th>
      <th>Довжина спереду, см</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>42-44</td>
      <td>84-96</td>
      <td>114</td>
      <td>78</td>
      <td>62</td>
    </tr>
    <tr>
    <td>46-48</td>
      <td>97-106</td>
      <td>118</td>
      <td>78</td>
      <td>62</td>
    </tr>
    <tr>
    <td>50-52</td>
      <td>107-116</td>
      <td>124</td>
      <td>80</td>
      <td>64</td>
    </tr>
    <tr>
    <td>54-56</td>
      <td>117-122</td>
      <td>132</td>
      <td>83</td>
      <td>68</td>
    </tr>
    <tr>
    <td>58-60</td>
      <td>120-135</td>
      <td>142</td>
      <td>83</td>
      <td>69</td>
    </tr>
  </tbody>
</table>

      <p className='productSizeText'><span className='productSize-bolt'>*</span>   Розміри розраховані сидіти вільно а фасон відповідає сучасним трендам, підходе на всі типи фігур та має широку варіативність подачі образу та об'ємності силуету.</p>
      <img className='line' src={require('../../Images/line.png')} alt="line" />
    </section>
  );
};
