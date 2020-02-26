
// Переулючаем слайды сервисов
var services_buttons = document.querySelectorAll(".services-button");
var services_list = document.querySelector(".services-list");

function removeCurrentClass(element_number)  // удаление класса по номеру элемента в массиве services_buttons
{
    services_buttons[element_number].classList.remove("current-services-button");
}


function addCurrentClass(element_number) // Добавление класса элементу по клику
{
    services_buttons[element_number].addEventListener("click", function(evt)
    {
        if(!services_buttons[element_number].classList.contains("current-services-button"))
        {
            for (var i = 0; i < services_buttons.length; i++)
            {
                removeCurrentClass(i);
            }

            services_buttons[element_number].classList.add("current-services-button");
            if (services_buttons[element_number].id === "first-slide-button")
            {
                services_list.style.transform = "translate(0)";
            }

            if (services_buttons[element_number].id === "second-slide-button")
            {
                services_list.style.transform = "translate(-760px)";
            }

            if (services_buttons[element_number].id === "third-slide-button")
            {
                services_list.style.transform = "translate(-1520px)";
            }

        }
    });
}


for (var i = 0; i < services_buttons.length; i++)
{
    addCurrentClass(i);
}
