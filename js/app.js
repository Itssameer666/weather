let cityse=document.querySelector(".city")
let ms=document.querySelector(".ms-1")
let temp=document.querySelector(".tepm")
let per=document.querySelector(".ms-2")


async function search(){
    let city = document.querySelector("input").value.trim();
    const key ="159bc800646d95743bdfdc067683843e";
    if(city=="")
    {
        alert("Please enter your city");
        return;
    }

    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    let data=await res.json();
     console.log(data);
       cityse.textContent=`City- ${data.name}`;
       cityse.style.fontStyle="italic"
       ms.textContent=`Humidity- ${data.main.humidity}% `;
       temp.textContent=` Temp- ${data.main.temp}℃`;
       per.textContent=` Pressure- ${data.main.pressure}`;
     
}
