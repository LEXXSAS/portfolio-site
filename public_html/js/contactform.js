document.addEventListener("DOMContentLoaded", () => {

    const ajaxSend = async (formData) => {
        const response = await fetch("mail.php", {
            method: "POST",
            body: formData
        });
        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`);
        }
        return await response.text();
    };

    if (document.querySelector("form")) {
        const forms = document.querySelectorAll("form");

        forms.forEach(form => {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const formData = new FormData(this);

                ajaxSend(formData)
                    .then((response) => {
                        // console.log(response);
                        alert(response);
                        // очищаем поля формы
                        form.reset();
                    })
                    .catch((err) => console.error(err))
            });
        });
    }

});
