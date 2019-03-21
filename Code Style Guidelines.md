# ![](https://www.dropbox.com/s/4mk1u5poer2zmqm/beeline.png?dl=0&raw=1) B2C Development  - Code Style Guidelines

## ![](https://www.dropbox.com/s/86k5iyc50cdtd3b/react.png?dl=0&raw=1) React/JSX

### Оглавление

   1.   Основные правила
   2.   Именование
   3.   Кавычки
   4.   Строки
   5.   Импорт
   6.   Объявление React компонента
   7.   Теги
   8.   Свойства (props)
   9.   Типы свойств (PropTypes)

### Основные правила

  - Всегда используйте JSX синтаксис.
  - Используйте расширение `.jsx` для компонентов React.

---

### Именование
  - **Именование компонентов:** Назвайте React компоненты в стиле [UpperCamelCase](https://ru.wikipedia.org/wiki/CamelCase). Называйте файлы так же как и компоненты.Например, `FancyNumber.jsx` должен содержать внутри компонент `FancyNumber`. Однако корневые компоненты в директории должны лежать в файле `index.jsx`, и в этом случае название папки должно быть таким же, как название компонента:
    
```javascript
// плохо
import Header from './Header/Header';

// плохо
import Header from './Header/index';

// хорошо
import Header from './Header';
```
    
   В директории рядом с `index.jsx`, при необходимости, кладутся:
      - файл со стилями для данного React компонента `styles.pcss`
      - файл с action creators `actions.js`
      - файл с фукнцией-reducer `reducer.js`
    
  - **Именование переменных, функций:** Используйте [lowerCamelCase](https://ru.wikipedia.org/wiki/CamelCase) для имен переменных, функций. 
    - Имя переменной - *существительное*. 
    - Имя функции - *глагольные префиксы*, обозначающие общий характер действия, после которых следует уточнение. 
    
```javascript
// плохо
let getData;
    
// хорошо
let data;

// плохо
const message = () => ....

// хорошо
const showMessage = () => ...
```
    
  - **Именование свойств (props):** Используйте [lowerCamelCase](https://ru.wikipedia.org/wiki/CamelCase) для имен свойств. Избегайте использования названий свойств DOM-компонента для других целей.
    
```javascript
// плохо
<FancyNumber className={5} style="fancy" />
    
// хорошо
<FancyNumber count={5} case="fancy" />
```

---

### Кавычки
Двойные кавычки (`"`) используйте для JSX-атрибутов и для названия и значения полей в формате JSON. Одинарные кавычки (`'`) используйте для всего остального JS.

```javascript
// плохо
state = {
    text: "Hello World"
};

// хорошо
state = {
    text: 'Hello World'
};

// плохо
<Button className='big' />

// хорошо
<Button className="big" />
```

---

### Импорт
  - Весь импорт в React компоненте следует делить на несколько блоков.
  - Блоки импорта отделяются друг от друга пустой строкой.
  - **Первый блок**. Первый блок импорта включает в себя импорт из пакетов: `react`, `react-dom`, `redux`, `react-redux`, `react-router-dom`. Пример: 

```javascript
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
```

   - **Второй блок**. Второй блок импорта включает в себя импорт вспомогательных пакетов, фукнций, констант. Пример:
    
```javascript
import PropTypes from 'prop-types';
import axios from 'axios';
import * as R from 'ramda';
import { fetchInitialData } from './actions';
import detectMobileOS from 'utils/detectMobileOS';
import { buttonTexts, titles, texts } from './constants'
```

   - **Третий блок**. Третий блок импорта включает в себя импорт используемых React компонентов. Пример:
        
```javascript
import { DataBlocks, ErrorBlock, MyBeelineBanner } from 'components';
import MPBanner from './components/MPBanner';
import Services from './containers/Services';
```

   - **Четвертый блок**. В четвертом блоке импорта подключаются стили для React компонента. Пример:
        
```javascript
import classNames from 'classnames/bind';
import styles from './styles.pcss';
const cx = classNames/bind(styles);
```
        
   - При использовании деструктурирующего импорта вида: 
    
```javascript
import { buttonTexts, titles, texts } from './constants';
```
    
Если число импортируемых объектов больше 4, то импорт следует прописывать в следующем виде:
    
```javascript
import {
    fetchInitialData,
    fetchDataSuccess,
    fetchDataError,
    fetchDataStart,
    fetchUserInfo
} from './actions';
import {
    DataBlocks,
    Link,
    Icon,
    CollapsedContent,
    Button,
    AppButton
} from 'components';
```

---

### Строки
Используйте шаблонные строки в выражениях.
```javascript
// плохо
<article style={{ backgroundImage: 'url(' + backgroundImage + ')' }} />

// хорошо
<article style={{ backgroundImage: `url(${backgroundImage})` }} />
```

---

### Объявление React компонента    

  - Если объявляемый React компонент предусматривает использование **lifecycle** методов, в том числе собственную реализацию метода `shouldComponentUpdate()`, то объявлять React компонент необходимо, как класс, наследуемый от `React.Component`, следующим образом:
    
```javascript
import React, { Component } from 'react';
    
class MyComponent extends Component {
    
    // some JS code ...
    
    render() {
        return(
                
            // some JSX code ...
                
        );
    }
}
    
export default MyComponent;
```

   - Если объявляемый React компонент реализует хотя бы одно из следующих свойств:
    - является **Stateful** компонентом, т.е. содержит внутреннее состояние `this.state`
    - предусматривает использование **lifecycle** методов, **но не** предполагается собственная реализацию метода `shouldComponentUpdate()`
    - предусматривет использование атрибутов **refs**

    то объявлять React компонент необходимо, как класс, наследуемый от `React.PureComponent`, следующим образом:
    
```javascript
import React, { PureComponent } from 'react';
    
class MyComponent extends PureComponent {
    
    // some JS code ...
    
    render() {
        return(
                
            // some JSX code ... 
            
        );
    }
}
    
export default MyComponent;
```

   - Если объявляемый React компонент реализует все следущие условия:
    - является **Stateless** компонентом, т.е. **не** содержит внутреннее состояние `this.state`
    - **не** предусматривает использование **lifecycle** методов
    - **не** предусматривет использование атрибутов **refs**
    
    то объявлять React компонент надо следующим образом:
    
```javascript
import React from 'react';
    
const MyComponent = ({ props }) => (
        
    // some JSX code ... 
        
);
    
export default MyComponent;
```
    
или
    
```javascript
import React from 'react';
    
const MyComponent = ({ props }) => {
        
    // some JS code ...
    
    return(
            
        // some JSX code ... 
            
    );
};
    
export default MyComponent;
```

---

### Теги
  - Всегда используйте самозакрывающиеся теги, если у элемента нет дочерних элементов
  
```html
// плохо
<FancyNumber onClick={clickAction} className="longer"></FancyNumber>
    
// хорошо
<FancyNumber onClick={clickAction} className="longer" />
```

   - Если React компонент имеет множество свойств, которые располагаются на нескольких строчках, то закрывайте тег на новой строке

```html
// плохо
<Popup
    open
    className="longer"
    closePopup={this.togglePopup} />
    
// хорошо
<Popup
    open
    className="longer"
    closePopup={this.togglePopup}
/>
```

   - По возможности, используйте компонент `<Picture />` вместо html-тега `img`.
   - Свойство `alt` для тега `img` или компонента `<Picture />` следует прописывать на русском языке.

---

### Свойства (props)        
  - При передаче React компоненту больше 2-х свойств следует разносить их на разные строки. Это улучшает читабельность кода.
    
```html
// плохо
<FancyNumber onClick={clickAction} className="longer" count={5} transformer />
    
// хорошо
<FancyNumber
    onClick={clickAction}
    className="longer"
    count={5}
    transformer
/>
```

   - Не указывайте значение свойства, когда оно явно `true`.

```html
// плохо
<MNPPopup open={true} />
    
// хорошо
<MNPPopup open />
```

---

### Типы свойств (PropTypes)
  - Всегда объявляйте  `PropTypes` после React компонента. 
  
  - Если React компонент подключен к хранилищу `store`, то объявляйте  `PropTypes` сразу после компонента,
  перед функциями `mapStateToProps()` или `mapDispatchToProps()`.
  
  - Если используете `defaultProps` - объявляйте их первыми, затем `propTypes.`
    
```javascript
import React from 'react';
import { connect } from 'react-redux';
  
import PropTypes from 'prop-types';
  
const MyComponentWithProps = ({ props }) => (
    
          // some JSX code ...
           
);
    
MyComponentWithProps.defaultProps = {
    someText: 'Hello World'
};
    
MyComponentWithProps.propTypes = {
    someText: PropTypes.string,
    count: PropTypes.number
};
    
const mapStateToProps = (state) => ({
    count: state.reducer.count
});
    
export default (connect)(MyComponentWithProps);
```
    
**Соглашения по описанию типов props**

   - Если тип *props* - `object` и поля объекта **не используются** в React компоненте (например, этот объект прокидывается в *props* другому React компоненту), то описывать этот объект надо следующим образом:
    
```javascript
data: PropTypes.object
```

   - Если тип *props* - `object` и поля объекта **используются** в React компоненте, то необходимо описывать **используемые поля** объекта с помощью `PropTypes.shape()`:
    
```javascript
data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    clickAction: PropTypes.func
})
```
        
   - Если тип *props* - `array`, то необходимо описывать тип элемента массива. Если тип элемента массива - `object` и поля объекта  **используются** в React компоненте - используйте `PropTypes.shape()`:
    
```javascript
texts: PropTypes.arrayOf(
        PropTypes.string
),
benefits: PropTypes.arrayOf(
    PropTypes.shape({
        text: PropTypes.string,
        emoji: PropTypes.string
    })
)
```


---

## ![](https://www.dropbox.com/s/5yvunjxkt0n20hz/postcss.png?dl=0&raw=1) PostCSS

### Оглавление

   1.   Основные правила
   2.   Порядок объявления
   3.   Быстрое чтение
   4.   Сокращенная запись
   
###   Основные правила
  - Используйте английский язык. Не используйте транслит.
  
  - Записывайте имена классов строчными буквами и используйте дефис - в местах разделения слов (не используйте как разделитель слов один символ нижнего подчеркивания, не используйте *lowerCamelCase*).
  
  - **Не используйте** для стилизации `id`. *«Вес селектора»* становится выше, а повторить атрибут `id` на одной странице нельзя.
  
  - Избегайте тегов в селекторах.
  
  - Идите по пути `Mobile-First`. Стилизуйте мобильное представление адаптивной страницы, а потом дописывайте стилевые изменения с помощью `@media (...)`.
  
  - **Не используйте** `display: grid`. В IE пока еще не поддерживается данное свойство. Вместо этого используйте `display: flex`.
  
  - Сокращайте 16-ричные значения везде, где это возможно.
  
```less
/* плохо */
color: #cccccc;

/* хорошо */
color: #ccc;
```
    
  - Опускайте единицы измерения там, где это возможно
  
```less
/* плохо */
margin: 0px auto;

/* хорошо */
margin: 0 auto;
```
 
---

### Порядок объявления
Объявления логически связанных свойств должны быть сгруппированы в следующем порядке:

  - Позиционирование
  - Блочная модель и размеры
  - Текстовые свойства
  - Отображение
  - Остальное
  - Плавные переходы, анимация

Позиционирование может удалить элемент из нормального потока документа и переопределить блочную модель связанных стилей, поэтому указывайте его первым. Блочная модель диктует размеры и расположение компонента, пишите ее второй. Группы правил разделяйте пустыми строками.

```css
.selector {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 30px;
   
  display: block;
  float: right;
  width: 100px;
  height: 100px;
   
  font: 13px/1.5 "Helvetica Neue", sans-serif;
  color: #333;
  text-align: center;
   
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  opacity: 1;
   
  transition: all 0.3s;
}
```

---

### Быстрое чтение
  - Оставляте пустую строку перед селектором или группой селекторов.
  - Оставляйте пустую строку перед любым вложенным селектором `&` или `@media`.
  
```less
.heading {
  margin-bottom: 20px;

  @media (--tablet) {
    margin-bottom: 30px;
  }
}

.block {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  & .block-item {
    padding: 10px;
    
    width: 100%;
    max-width: 400px;

    @media (--tablet) {
      width: 50%;
    }
  }
}
```

---

### Сокращенная запись
Избегайте сокращенных объявлений без необходимости. 

```less
/* плохо */
margin: 0 20px 0 0;

/* хорошо */
margin-right: 20px;

/* плохо */
font-family: "Officina Serif", serif;
font-size: 17px;
line-height: 24px;

/* хорошо */
font: 17px/24px "Officina Serif", serif;
```
