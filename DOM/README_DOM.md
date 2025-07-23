
DOM (Document Object Model)

The DOM (Document Object Model) is a programming interface for HTML and XML documents. It allows you to interact with and manipulate a web page using JavaScript.

For accessing element we have to provide id 

document.getElementById('id_name').innerHTML = "<h1>Yagnik Pansheriya</h1>"

it replace the content of class with id = id_name to yagnik pansheriya

if want to print the id then

document.getElementById('id_name').id   

for className :-  document.getElementById('hea').className

for getting attribute

document.getElementById('hea').getAttribute('id') //it will give id name

document.getElementById('hea').getAttribute('class') //it will give class name

for setting attribute :- 

document.getElementById('hea').setAttribute('id','value') //it will give id name and override with an value.

For getting reference : const title = document.getElementById('hea')
now we can use title as reference variable to perform some task.

title.style.backgroundcolor = 'green'  ( it will create a bgcolor with green colour)

for getting contenet of class or id through element

title.textContent 
title.innertext
title.innerHTML

<div id="example1"><b>Hello</b> World</div>
<div id="example2">Hi <span style="display: none">Hidden</span> Text</div>

in innerHTML ==> it will return HTMl inside the element
in innertext ==> returns only the visible text (ignores hidden text)
in textContent ==>  returns all text, including hidden ones

QuerySelector used to select element by id ,class or tag

it will return the first matching element.

const temp = document.querySelector('hea')

const temp = document.querySelector('ul')

const changebg = temp.querySelector('li')

changebg.style.backgroundColor = 'red'
changebg.style.padding = "10px" // it will made changes in first li 

if this is the ul

<ul>
    <li>Sonu</li>
    <li>
        Darshan
    </li>
    <li>Yagnik</li>
</ul>

then sonu's bgcolor is red and padding is 10px.

we can also change text of it with the help of following syntax

changebg.innerText = "Mohit"

QuerySelectorAll will return nodelist , for traversal we can use ForEach loop or we can convert into Array using Array.from(documet.querySelctorAll('hea'))

# 📄 Dynamic Div Creation Using JavaScript

This project demonstrates how to create and insert an HTML `<div>` element dynamically using JavaScript.

---

## 🔍 Line-by-Line Explanation

- **`document.createElement('div')`**  
  Creates a new `<div>` element (not yet visible on the page).

- **`.className = "yag"`**  
  Sets the class of the new div for styling purposes.

- **`.id = "y1"`**  
  Assigns an ID to the div so it can be uniquely identified.

- **`.style.color = "red"`**  
  Applies red text color using inline CSS.

- **`.style.padding = "40px"`**  
  Adds padding inside the div.

- **`document.createTextNode('yagnik pasheriya')`**  
  Creates a text node with your custom message.

- **`.appendChild(textNode)`**  
  Inserts the text inside the div.

- **`document.body.appendChild(div)`**  
  Finally appends the styled div to the end of the webpage body, making it visible.

---

## 🖥️ Final Output (Rendered HTML)
```html
<div id="y1" class="yag" style="color:red; padding:40px;">
  yagnik pasheriya
</div>
```

---

## 🚀 How to Use

1. Add the script to any HTML file inside a `<script>` tag.
2. Open the file in a browser.
3. A red, padded box with the text “yagnik pasheriya” will appear on the page.


For edit ==>
    yag.replaceWith(temp);

for Remove ==>
    yag.remove(li:nth0child)

    