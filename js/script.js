
// ----- Переключаем слайды сервисов -----

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

// (КОНЕЦ) -----  Переключаем слайды сервисов -----



// ----- Открытие / закрытие модального окна .write-us-window -----

var isStorageSupport = true;
var saved_name = "";
var saved_email = "";
try
{
  saved_name = localStorage.getItem("user_name");
  saved_email = localStorage.getItem("user_email");
}
catch (err)
{
  isStorageSupport = false;
}


var write_us_link = document.querySelector(".write-us-link");

var write_us_window = document.querySelector(".write-us-window");
var close_write_us_window = write_us_window.querySelector(".window-close-button");

var name_field = write_us_window.querySelector("[name=name]");
var email_field = write_us_window.querySelector("[name=email]");
var message_field = write_us_window.querySelector("[name=message]");

var write_us_form = write_us_window.querySelector("form");


// Открытие модального окна, фокусировка и авто заполнение полей
write_us_link.addEventListener("click", function(evt)
{
    evt.preventDefault();
    write_us_window.classList.add("modal-window-visible");

    var focused_field = name_field;
    if ( isStorageSupport )
    {
        if ( saved_name )
        {
            name_field.value = saved_name;
            focused_field = email_field;

            if ( email_field )
            {
                email_field.value = saved_email;
                focused_field = message_field;
            }
        }
    }

    focused_field.focus();
});


// Закрытие модального окно по нажатию крестика

function hideWindowByClick(close_button, modal_window)
{
    close_button.addEventListener("click", function(evt)
    {
        modal_window.classList.remove("modal-window-visible");
    });
}

hideWindowByClick(close_write_us_window, write_us_window);


// Закрытие модального окно по нажатию ESC
function hideWindowByEsc(modal_window)
{
    window.addEventListener("keydown", function(evt)
    {
        if ( evt.keyCode === 27)
        {
            evt.preventDefault();
            if( modal_window.classList.contains("modal-window-visible") )
            {
                modal_window.classList.remove("modal-window-visible");
            }
        }
    });
}

hideWindowByEsc(write_us_window);


// Проверка заполнения полей
write_us_form.addEventListener("submit", function (evt)
{
    var invalid_fields = 0;
    var fields = [name_field, email_field, message_field];
    for (var i = 0; i < fields.length; i++ )
    {
        if( !fields[i].value )
        {
            fields[i].classList.add("field-invalid");
            invalid_fields++;
        }
    }

    if ( invalid_fields )
    {
        evt.preventDefault();
        console.log("Заполните все поля");
    }
    else
    {
        localStorage.setItem("user_name", name_field.value);
        localStorage.setItem("user_email", email_field.value);
    }
});

// (КОНЕЦ) ----- Открытие / закрытие модального окна .write-us-window -----



// ----- Открытие / закрытие модального окна карты -----

var map_link = document.querySelector(".map-link");
var map_window = document.querySelector(".map-window");
var close_map_window = map_window.querySelector(".window-close-button");


// Открытие модального окна карты
map_link.addEventListener("click", function(evt)
{
    evt.preventDefault();
    map_window.classList.add("modal-window-visible");
});

hideWindowByClick(close_map_window, map_window);
hideWindowByEsc(map_window);
