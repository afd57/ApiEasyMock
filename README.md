# reactTutorial

Note: Always start component names with a capital letter. - [new code]

React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

To learn more about the reasoning behind this convention, please read JSX In Depth. https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized


All React components must act like pure functions with respect to their props.


In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

Functional componentleri kullanmak daha populer



```
<Component1 name="A">
    <h3>1234</h3>
</Component1>


function Component1(props) {
    console.log(props.name)
    console.log(props.children) // componentin icindeki childlar.
}
js```


```
useState() iki elemanli bir dizi dondurur.

     Statein adi 
        |        
const [count, setCount] = useState(0);
                  |
       State'i bununla degistirecegiz.



Iyice anlasilmasi.

mounting & unmounting 

mout asmak. Componenti televizyon gibi dusun onu alip aliyoruz. 


componentDidMount()   bilesen ilk yuklendiginde calisir
componentDidUpdate() bilesen ipdate edildiginde calisir
componentWillUnmount() bilesen ekrandan kaldirilinca


```



UseEffect() kullanimi.
- method iki tane parametre alir.
 1. calistiricak fonksiyon
 2. birinci parameternin ne zaman calistirilacagina karar veren bagimli elemanlar dizisi. 
- Eger ikinci parametere bos olursa fonksiyon sadece bilesen ilk yuklendiginde calisir 


